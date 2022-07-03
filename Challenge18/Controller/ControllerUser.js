import User from "../Model/User.js"
import Main, { rl } from "../Challenge18Main.js"


export default class UserController {
    static askUsername() { // Username
        rl.question('Username: ', (username) => {
            User.cariUsername(username, (err, data) => {
                if (err) {
                    console.log('gagal username', err)
                    process.exit(1)
                } else if (data.length == 0) {
                    console.log('data username tidak ada')
                    UserController.askUsername()
                } else {
                    UserController.askPassword(data[0])
                }
            })
        })
    }

    static askPassword(user) { // Password
        rl.question('Password: ', (password) => {
            if (password === user.password) {
                console.log(`\nWelcome ${user.username}. Your access level is: ${user.access}`)
                console.log('========================================================')
                Main.menuUtama()
            } else {
                console.log('Password Salah')
                UserController.askPassword(user)
            }
        })
    }
}