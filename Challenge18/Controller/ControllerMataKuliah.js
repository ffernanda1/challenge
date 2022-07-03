import Main, { rl } from "../Challenge18Main.js";
import table from "cli-table";
import Matkul from "../Model/MataKuliah.js";
import ViewDasar from "../View/ViewUser.js";
import ViewMatakuliah from "../View/ViewMataKuliah.js";




export default class ControllerMataKuliah {

    static menuMatakuliah() {// Menu Matakuliah
        ViewMatakuliah.menuMatakuliah()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) { //Daftar Matakuliah
                ControllerMataKuliah.daftarMatakuliah()
            }

            else if (input2 == 2) { // Cari Matakuliah
                ControllerMataKuliah.cariMatakuliah()
            }

            else if (input2 == 3) {// Tambah Matakuliah
                ControllerMataKuliah.tambahMatakuliah()
            }

            else if (input2 == 4) {// Hapus Matakuliah
                ControllerMataKuliah.hapusMatakuliah()

            }

            else if (input2 == 5) {// Kembali
                Main.menuUtama()
            }

            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerMataKuliah.menuMatakuliah()
            }
        })
    }

    static daftarMatakuliah(callback) { // Daftar Matkul
        let tablematkul = new table({
            head: ['KodeMatkul', 'NAMA', 'SKS'],
            colWidths: [20, 20, 20]
        });
        ViewDasar.line()
        Matkul.listMatkul(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(1)
            }
            else if (rows.length > 0) {
                rows.forEach((matkul => {
                    tablematkul.push([matkul.kodematkul, matkul.nama, matkul.SKS])
                }))
                console.log(tablematkul.toString())
                if (callback) {
                    callback()
                } else {
                    ControllerMataKuliah.menuMatakuliah()
                }

            } else {
                console.log('salah table matakuliah')
            }
        })
    }

    static cariMatakuliah() { // Cari Matkul
        ViewDasar.line()
        rl.question('Masukan kodematkul: ', (inputCari) => {
            Matkul.searchMatkul(inputCari, (err, matkul) => {
                if (err) {
                    console.log('Data error', err)
                    process.exit(1)
                }

                else if (matkul) {
                    ViewMatakuliah.detailMatakuliah(matkul)
                    ControllerMataKuliah.menuMatakuliah()
                } else {
                    console.log('KodeMatkul tidak ditemukan')
                    ControllerMataKuliah.cariMatakuliah()
                }
            })
        })
    }

    static tambahMatakuliah() { // Tambah Matkul
        ViewDasar.lengkapi()
        rl.question('KodeMatkul: ', (inputTambah1) => {
            rl.question('Nama: ', (inputTambah2) => {
                rl.question('SKS: ', (inputTambah3) => {
                    Matkul.addMatkul(inputTambah1, inputTambah2, inputTambah3, (err) => {
                        if (err) {
                            console.log('Error insert', err)

                        } else {
                            ControllerMataKuliah.daftarMatakuliah()
                            ViewDasar.line()
                            ControllerMataKuliah.menuMatakuliah()
                        }
                    })
                })
            })
        })
    }

    static hapusMatakuliah() { // Hapus Matkul
        ViewDasar.line()
        rl.question('Masukkan KodeMatkul Matakuliah yang akan dihapus: ', (inputdelete) => {
            Matkul.deleteMatkul(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus MataKuliah ${inputdelete}`)
                    ControllerMataKuliah.menuMatakuliah()

                } else {
                    console.log(`Matakuliah dengna KodeMatkul ${inputdelete} telah terhapus`)
                    ControllerMataKuliah.daftarMatakuliah()
                }
            })
        })
    }
}