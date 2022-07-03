import sqlite3 from 'sqlite3';
import readline from 'readline';
import ViewDasar from './View/ViewUser.js';
import ControllerDosen from './Controller/ControllerDosen.js';
import ControllerJurusan from './Controller/ControllerJurusan.js';
import ControllerKontrak from './Controller/ControllerKontrak.js';
import ControllerMahasiswa from './Controller/ControllerMahasiswa.js';
import ControllerMataKuliah from './Controller/ControllerMataKuliah.js';
import UserController from './Controller/ControllerUser.js';


export const db = new sqlite3.Database('./kuliah.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('gagal koneksi', err)
    }
});

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


export default class Main {
    static menuUtama() {//Menu pilihan table
    ViewDasar.menuUtama()
    rl.question('masukkan salah satu nomor dari opsi diatas: ', (input1) => {
        if (input1 == 1) {
            ControllerMahasiswa.menuMahasiswa()
        }

        else if (input1 == 2) {
            ControllerJurusan.menuJurusan()
        }

        else if (input1 == 3) {
            ControllerDosen.menuDosen()
        }

        else if (input1 == 4) {
            ControllerMataKuliah.menuMatakuliah()
        }

        else if (input1 == 5) {
            ControllerKontrak.menuKontrak()
        }

        else if (input1 == 6) {
            Main.login()
        }

        else {
            console.log('\ndata belum ada\n')
            Main.menuUtama()
        }
    });
}

    static login() {
        ViewDasar.welcome()
        UserController.askUsername()
        

    }

}

Main.login()




