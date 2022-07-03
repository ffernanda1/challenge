import table from "cli-table";
import ViewDosen from "../View/ViewDosen.js";
import ViewDasar from "../View/ViewUser.js";
import Dosen from "../Model/Dosen.js";
import Main, { rl } from "../Challenge18Main.js";




export default class ControllerDosen {

    static menuDosen() {// Menu Dosen
        ViewDosen.menuDosen()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) { //Daftar Dosen
                ControllerDosen.daftarDosen()
            }

            else if (input2 == 2) { // Cari Dosen
                ControllerDosen.cariDosen()
            }

            else if (input2 == 3) {// Tambah Dosen
                ControllerDosen.tambahDosen()
            }

            else if (input2 == 4) {// Hapus Dosen
                ControllerDosen.hapusDosen()
            }

            else if (input2 == 5) {// Kembali
                Main.menuUtama()
            }

            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerDosen.menuDosen()
            }

        })
    }

    static daftarDosen(callback) { // Daftar Dosen
        let tabledosen = new table({
            head: ['NIDN', 'NAMA'],
            colWidths: [20, 20]
        });
        ViewDasar.line()
        Dosen.listDosen(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(0)
            }
            else if (rows.length > 0) {
                rows.forEach((dosen => {
                    tabledosen.push([dosen.nidn, dosen.nama])
                }))
                console.log(tabledosen.toString())
                if (callback) {
                    callback()
                } else {
                    ControllerDosen.menuDosen()
                }
            } else {
                console.log('salah Daftar table')
                ControllerDosen.daftarDosen()
            }

        }
        )
    }

    static cariDosen() { // Cari Dosen
        ViewDasar.line()
        rl.question('Masukan NIDN: ', (inputCari) => {
            Dosen.searchDosen(inputCari, (err, dosen) => {
                if (err) {
                    return console.log('Data error', err)
                }

                else if (dosen) {
                    ViewDosen.detailDosen(dosen)
                    ControllerDosen.menuDosen()
                } else {
                    console.log('NIDN tidak ditemukan')
                    ControllerDosen.cariDosen()
                }
            })
        })
    }

    static tambahDosen() { // Tambah Dosen

        ViewDasar.lengkapi()
        rl.question('NIDN: ', (inputTambah1) => {
            rl.question('Nama: ', (inputTambah2) => {
                Dosen.addDosen(inputTambah1, inputTambah2, (err) => {
                    if (err) {
                        console.log('Error insert', err)

                    } else {
                        ControllerDosen.daftarDosen()
                        ViewDasar.line()
                        ControllerDosen.menuDosen()
                    }
                })
            })
        })
    }

    static hapusDosen() { // Hapus Dosen
        ViewDasar.line()
        rl.question('Masukkan NIDN Dosen yang akan dihapus: ', (inputdelete) => {
            Dosen.deleteDosen(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus Dosen ${inputdelete}`)
                    ControllerDosen.menuDosen()

                } else {
                    console.log(`Dosen dengan NIDN: ${inputdelete} telah terhapus`)
                    ControllerDosen.daftarDosen()
                }
            })
        })
    }
}