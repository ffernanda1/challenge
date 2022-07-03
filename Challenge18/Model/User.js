import { db } from "../Challenge18Main.js";

export default class User {
    static cariUsername(username, callback) {
        db.all("SELECT * FROM login where username= ?", [username], (err, data) => {
            callback(err, data)
        });
    }
}