import { db } from "../Challenge18Main.js"

export default class Mahasiswa {

    static listMahasiswa(callback) {
        db.all("SELECT * FROM mahasiswa", (err, rows) => {
            callback(err, rows)
        })
    }

    static searchMahasiswa(inputCari, callback) {
        db.get("SELECT * FROM mahasiswa WHERE nim=?", [inputCari], (err, mahasiswa) => {
            callback(err, mahasiswa)
        })
    }

    static addMahasiswa(inputTambah1, inputTambah2, inputTambah3, inputTambah4, callback) {
        db.run(`INSERT INTO mahasiswa (nim, nama, alamat, jurusan) VALUES (?,?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4]], (err) => {
            callback(err)
        })
    }

    static deleteMahasiswa(inputdelete, callback) {
        db.run(`DELETE FROM mahasiswa WHERE nim=?`, [inputdelete], (err) => {  
           callback(err)
        })
    }


}