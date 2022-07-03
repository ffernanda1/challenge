import Main, { rl } from "../Challenge18Main.js";
import table from "cli-table";
import Mahasiswa from "../Model/Mahasiswa.js";
import ViewDasar from "../View/ViewUser.js";
import ViewMahasiswa from "../View/ViewMahasiswa.js";
import ControllerJurusan from "./ControllerJurusan.js";


export default class ControllerMahasiswa {

    static menuMahasiswa() {// Menu Mahasiswa
        ViewMahasiswa.menuMahasiswa()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) { //Daftar Mahasiswa
                ControllerMahasiswa.daftarMahasiswa()
            }

            else if (input2 == 2) { // Cari Murid
                ControllerMahasiswa.cariMahasiswa()
            }

            else if (input2 == 3) {// Tambah Murid
                ControllerMahasiswa.tambahMahasiswa()
            }

            else if (input2 == 4) {// Hapus Murid
                ControllerMahasiswa.hapusMahasiswa()

            }

            else if (input2 == 5) {// Kembali
                Main.menuUtama()
            }

            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerMahasiswa.menuMahasiswa()
            }
        })
    }

    static daftarMahasiswa(callback) { // Daftar Mahasiswa
        let tablemahasiswa = new table({
            head: ['NIM', 'NAMA', 'ALAMAT', 'JURUSAN'],
            colWidths: [20, 20, 20, 20]
        });
        ViewDasar.line()
        Mahasiswa.listMahasiswa(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(0)
            }
            else if (rows.length > 0) {
                rows.forEach((mahasiswa => {
                    tablemahasiswa.push([mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.jurusan])

                }))
                console.log(tablemahasiswa.toString())
                if (callback) {
                    callback()
                } else {
                    ControllerMahasiswa.menuMahasiswa()
                }

            } else {
                console.log('salah ')
            }
        })
    }

    static cariMahasiswa() { // Cari Mahasiswa
        ViewDasar.line()
        rl.question('Masukan NIM: ', (inputCari) => {
            Mahasiswa.searchMahasiswa(inputCari, (err, mahasiswa) => {
                if (err) {
                    return console.log('Data error', err)
                }

                else if (mahasiswa) {
                    ViewMahasiswa.detailMahasiswa(mahasiswa)
                    ControllerMahasiswa.menuMahasiswa()
                } else {
                    console.log('NIM tidak ditemukan')
                    ControllerMahasiswa.cariMahasiswa()
                }
            })
        })
    }

    static tambahMahasiswa() { // tambah Mahasiswa
        ViewDasar.lengkapi()
        rl.question('NIM: ', (inputTambah1) => {
            rl.question('Nama: ', (inputTambah2) => {
                rl.question('Alamat: ', (inputTambah3) => {
                    ControllerJurusan.daftarJurusan(function () {
                        rl.question('Jurusan: ', (inputTambah4) => {
                            Mahasiswa.addMahasiswa(inputTambah1, inputTambah2, inputTambah3, inputTambah4, (err) => {
                                if (err) {
                                    console.log('Salah satu data sudah terisi', err)
                                    ControllerMahasiswa.tambahMahasiswa()
                                } else {
                                    ControllerMahasiswa.daftarMahasiswa()

                                }
                            })
                        })
                    })
                })
            })
        })
    }

    static hapusMahasiswa() { // Hapus Mahasiswa
        ViewDasar.line()
        rl.question('Masukkan NIM mahasiswa yang akan dihapus: ', (inputdelete) => {
            Mahasiswa.deleteMahasiswa(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus Mahasiswa`, err)
                    ControllerMahasiswa.menuMahasiswa()

                } else {
                    console.log(`Mahasiswa dengan nim ${inputdelete} telah di hapus`)
                    ControllerMahasiswa.daftarMahasiswa()
                }
            })
        })
    }
}