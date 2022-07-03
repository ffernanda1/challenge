import { db } from "../Challenge18Main.js"

export default class Matkul {
    static listMatkul(callback) {
        db.all("SELECT * FROM matkul", (err, rows) => {
            callback(err, rows)
        })
    }

    static searchMatkul(inputCari, callback) {
        db.get("SELECT * FROM matkul WHERE kodematkul=?", [inputCari], (err, matkul) => {
            callback(err, matkul)
        })
    }

    static addMatkul(inputTambah1, inputTambah2, inputTambah3, callback) {
        db.run(`INSERT INTO matkul (kodematkul, nama, SKS) VALUES (?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3]], (err) => {
            callback(err)
        })
    }

    static deleteMatkul(inputdelete, callback) {
        db.run(`DELETE FROM matkul WHERE kodematkul=?`, [inputdelete], (err) => {  
           callback(err)
        })
    }
}