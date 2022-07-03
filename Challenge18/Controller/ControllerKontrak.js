import table from "cli-table";
import ViewKontrak from "../View/ViewKontrak.js";
import ViewDasar from "../View/ViewUser.js";
import Kontrak from "../Model/Kontrak.js";
import Main, { rl } from "../Challenge18Main.js";
import ControllerMahasiswa from "./ControllerMahasiswa.js";
import ControllerDosen from "./ControllerDosen.js";
import ControllerMataKuliah from "./ControllerMataKuliah.js";


export default class ControllerKontrak {
    static menuKontrak() {// Menu Kontrak
        ViewKontrak.menuKontrak()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) { //Daftar Kontrak
                ControllerKontrak.daftarKontrak()
            }

            else if (input2 == 2) { // Cari Kontrak
                ControllerKontrak.cariKontrak()
            }

            else if (input2 == 3) {// Tambah Kontrak
                ControllerKontrak.tambahKontrak()
            }

            else if (input2 == 4) {// Hapus Kontrak
                ControllerKontrak.hapusKontrak()

            }

            else if (input2 == 5) {// Kembali
                Main.menuUtama()
            }

            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerKontrak.menuKontrak()
            }

        })
    }

    static daftarKontrak(callback) { //Daftar Kontrak
        let tablekontrak = new table({
            head: ['ID', 'NIM', 'NIDN', 'KodeMatkul', 'Nilai'],
            colWidths: [20, 20, 20, 20, 20]
        });
        ViewDasar.line()
        Kontrak.listKontrak(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(1)
            }
            else if (rows.length > 0) {
                rows.forEach((kontrak => {
                    tablekontrak.push([kontrak.id, kontrak.nim, kontrak.nidn, kontrak.kodematkul, kontrak.nilai])
                }))
                console.log(tablekontrak.toString())
                ControllerKontrak.menuKontrak()

            } else {
                console.log('salah table Kontrak')
            }
        })
    }

    static cariKontrak() { // Cari Kontrak
        ViewDasar.line()
        rl.question('Masukan ID: ', (inputCari) => {
            Kontrak.searchKontrak(inputCari, (err, kontrak) => {
                if (err) {
                    return console.log('Data error', err)
                }

                else if (kontrak) {
                    ViewKontrak.detailKontrak(kontrak)
                    ControllerKontrak.menuKontrak()
                } else {
                    console.log('ID tidak ditemukan')
                    ControllerKontrak.cariKontrak()
                }
            }
            )
        })
    }

    static tambahKontrak() { // Tambah Kontrak
        ViewDasar.lengkapi()
        ControllerMahasiswa.daftarMahasiswa(function () {
            rl.question('NIM: ', (inputTambah1) => {
                ControllerDosen.daftarDosen(function () {
                    rl.question('NIDN: ', (inputTambah2) => {
                        ControllerMataKuliah.daftarMatakuliah(function () {
                            rl.question('KodeMatkul: ', (inputTambah3) => {
                                rl.question('Nilai: ', (inputTambah4) => {

                                    Kontrak.addKontrak(inputTambah1, inputTambah2, inputTambah3, inputTambah4, (err) => {
                                        if (err) {
                                            console.log('Error insert', err)

                                        } else {
                                            ControllerKontrak.daftarKontrak()
                                            ViewDasar.line()
                                            ControllerKontrak.menuKontrak()
                                        }
                                    })

                                })
                            })
                        })
                    })
                })
            })
        })
    }

    static hapusKontrak() { // Hapus Kontrak
        ViewDasar.line()
        rl.question('Masukkan ID yang akan dihapus: ', (inputdelete) => {
            Kontrak.deleteKontrak(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus kontrak: ${inputdelete}`)
                    ControllerKontrak.menuKontrak()
                }
                else {
                    console.log(`Kontrak dengan ID: ${inputdelete} tidak terdaftar`)
                    ControllerKontrak.daftarKontrak()
                }
            })
        }
        )

    }
}