import Main, { rl } from "../Challenge18Main.js";
import table from "cli-table";
import Jurusan from "../Model/Jurusan.js";
import ViewDasar from "../View/ViewUser.js";
import ViewJurusan from "../View/ViewJurusan.js";

export default class ControllerJurusan {
    static menuJurusan() {// Menu Jurusan
        ViewJurusan.menuJurusan()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) { //Daftar Jurusan
                ControllerJurusan.daftarJurusan()
            }

            else if (input2 == 2) { // Cari Jurusan
                ControllerJurusan.cariJurusan()
            }

            else if (input2 == 3) {// Tambah Jurusan
                ControllerJurusan.tambahJurusan()
            }

            else if (input2 == 4) {// Hapus Jurusan
                ControllerJurusan.hapusJurusan()

            }

            else if (input2 == 5) {// Kembali
                Main.menuUtama()
            }

            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerJurusan.menuJurusan()
            }
        })
    }

    static daftarJurusan(callback) { // Daftar Jurusan
        let tablejurusan = new table({
            head: ['KodeJurusan', 'NamaJurusan'],
            colWidths: [20, 20]
        });
        ViewDasar.line()
        Jurusan.listJurusan(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(1)
            }
            else if (rows.length > 0) {
                rows.forEach((jurusan => {
                    tablejurusan.push([jurusan.kodejurusan, jurusan.namaJurusan])
                }))
                console.log(tablejurusan.toString())
                if (callback) {
                    callback()
                } else {
                    ControllerJurusan.menuJurusan()
                }

            } else {
                console.log('salah table jurusan')
                ControllerJurusan.menuJurusan()
            }
        })
    }

    static cariJurusan() { // Cari Jurusan
        ViewDasar.line()
        rl.question('Masukan KodeJurusan: ', (inputCari) => {
            Jurusan.searchJurusan(inputCari, (err, jurusan) => {
                if (err) {
                    return console.log('Data error', err)
                }

                else if (jurusan) {
                    ViewJurusan.detailJurusan(jurusan)
                    ControllerJurusan.menuJurusan()
                } else {
                    console.log('Kode Jurusan tidak ditemukan')
                    ControllerJurusan.cariJurusan()
                }
            })
        })
    }

    static tambahJurusan() { // Tambah Jurusan
        ViewDasar.lengkapi()
        rl.question('KodeJurusan: ', (inputTambah1) => {
            rl.question('NamaJurusan: ', (inputTambah2) => {
                Jurusan.addJurusan(inputTambah1, inputTambah2, (err) => {
                    if (err) {
                        console.log('Error insert', err)

                    } else {
                        ControllerJurusan.daftarJurusan()
                        ViewDasar.line()
                        ControllerJurusan.menuJurusan()
                    }
                })
            })
        })
    }

    static hapusJurusan() { // Hapus Jurusan
        ViewDasar.line()
        rl.question('Masukkan KodeJurusan yang akan dihapus: ', (inputdelete) => {
            Jurusan.deleteJurusan(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus Jurusan ${inputdelete}`)
                    ControllerJurusan.menuJurusan()
                }

                else {
                    console.log(`Jurusan dengan KodeJurusan: ${inputdelete} telah terhapus`)
                    ControllerJurusan.daftarJurusan()
                }
            })
        })
    }
}