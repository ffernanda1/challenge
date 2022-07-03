import { db } from "../Challenge18Main.js"

export default class Kontrak {

    static listKontrak(callback) {
        db.all("SELECT * FROM kontrak", (err, rows) => {
            callback(err, rows)
        })
    }

    static searchKontrak(inputCari, callback) {
        db.get("SELECT * FROM kontrak WHERE id=?", [inputCari], (err, kontrak) => {
            callback(err, kontrak)
        })
    }

    static addKontrak(inputTambah1, inputTambah2, inputTambah3, inputTambah4, callback) {
        db.run(`INSERT INTO kontrak (nim, nidn, kodematkul, nilai) VALUES (?,?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4]], (err) => {
            callback(err)
        })
    }

    static deleteKontrak(inputdelete, callback) {
        db.run(`DELETE FROM kontrak WHERE id=?`, [inputdelete], (err) => {  
           callback(err)
        })
    }


}