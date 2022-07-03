import { db } from "../Challenge18Main.js"

export default class Jurusan {
    static listJurusan(callback) {
        db.all("SELECT * FROM jurusan", (err, rows) => {
            callback(err, rows)
        })
    }

    static searchJurusan(inputCari, callback) {
        db.get("SELECT * FROM jurusan WHERE kodejurusan=?", [inputCari], (err, jurusan) => {
            callback(err, jurusan)
        })
    }

    static addJurusan(inputTambah1, inputTambah2, callback) {
        db.run(`INSERT INTO jurusan (kodejurusan, namaJurusan) VALUES (?,?)`, [[inputTambah1], [inputTambah2]], (err) => {
            callback(err)
        })
    }

    static deleteJurusan(inputdelete, callback) {
        db.run(`DELETE FROM jurusan WHERE kodejurusan=?`, [inputdelete], (err) => {
            callback(err)
        })
    }
}