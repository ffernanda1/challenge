import sqlite3 from 'sqlite3';
import table from 'cli-table';


var db = new sqlite3.Database('./kuliah.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('gagal koneksi', err)
    }
});

import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

start()


// Fungsi - fungsi Pembukaan
function welcome() {
    console.log('========================================================')
    console.log('Welcome to University California\nJl. SetiaBudi no. 255')
    console.log('========================================================')
}

function askUsername() { // Username
    rl.question('Username: ', (username) => {
        db.all("SELECT * FROM login where username= ?", [username], (err, data) => {
            if (err) {
                console.log('gagal username', err)
                process.exit(1)
            } else if (data.length == 0) {
                console.log('data username tidak ada')
                askUsername()
            } else {
                askPassword(data[0])
            }
        }
        )
    })
}

function askPassword(user) { // Password
    rl.question('Password: ', (password) => {
        if (password === user.password) {
            console.log(`\nWelcome ${user.username}. Your access level is: ${user.access}`)
            console.log('========================================================')
            menuUtama()
        } else {
            console.log('Password Salah')
            askPassword(user)
        }
    }
    )
}


function start() {//Memulai dari awal
    welcome()
    askUsername()
}

function menuUtama() {//Menu pilihan table
    console.log('========================================================')
    console.log(`silahkan pilih opsi di bawah ini\n[1] Mahasiswa\n[2] Jurusan\n[3] dosen\n[4] mata kuliah\n[5] kontrak\n[6] keluar`)
    console.log('========================================================')
    rl.question('masukkan salah satu nomor dari opsi diatas: ', (input1) => {
        if (input1 == 1) {
            menuMahasiswa()
        }

        else if (input1 == 2) {
            menuJurusan()
        }

        else if (input1 == 3) {
            menuDosen()
        }

        else if (input1 == 4) {
            menuMatakuliah()
        }

        else if (input1 == 5) {
            menuKontrak()
        }

        else if (input1 == 6) {
            start()
        }

        else {
            console.log('\ndata belum ada\n')
            menuUtama()
        }
    });
}


// Fungsi-fungsi Mahasiswa dan Menu Mahasiswa

function menuMahasiswa() {// Menu Mahasiswa
    console.log('========================================================');
    console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Murid\n[2] Cari Murid\n[3] Tambah Murid\n[4] Hapus Murid\n[5] Keluar\n`)
    console.log('========================================================');
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
        if (input2 == 1) { //Daftar Mahasiswa
            daftarMahasiswa()
        }

        else if (input2 == 2) { // Cari Murid
            cariMahasiswa()
        }

        else if (input2 == 3) {// Tambah Murid
            tambahMahasiswa()
        }

        else if (input2 == 4) {// Hapus Murid
            hapusMahasiswa()

        }

        else if (input2 == 5) {// Kembali
            menuUtama()
        }

        else {
            console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
            menuMahasiswa()
        }

    })
}

function daftarMahasiswa() { // Daftar Mahasiswa
    let tablemahasiswa = new table({
        head: ['NIM', 'NAMA', 'ALAMAT', 'JURUSAN'],
        colWidths: [20, 20, 20, 20]
    });
    console.log('========================================================')
    db.all("SELECT * FROM mahasiswa", (err, rows) => {
        if (err) {
            console.log('data anda error', err)
            process.exit(0)
        }
        else if (rows.length > 0) {
            rows.forEach((mahasiswa => {
                tablemahasiswa.push([mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.jurusan])

            }))
            console.log(tablemahasiswa.toString())
            menuMahasiswa()

        } else {
            console.log('salah ')
        }

    }
    )
}

function cariMahasiswa() { // Cari Mahasiswa
    console.log('========================================================')
    rl.question('Masukan NIM: ', (inputCari) => {
        db.get("SELECT * FROM mahasiswa WHERE nim=?", [inputCari], (err, mahasiswa) => {
            if (err) {
                return console.log('Data error', err)
            }

            else if (mahasiswa) {
                console.log('========================================================')
                console.log('Student Details')
                console.log('========================================================')
                console.log(`NIM         :${mahasiswa.nim}\nNama        :${mahasiswa.nama}\nAlamat      :${mahasiswa.alamat}\nJurusan     :${mahasiswa.jurusan}\n`)
                menuMahasiswa()
            } else {
                console.log('NIM tidak ditemukan')
                cariMahasiswa()
            }
        }
        )
    })
}

function tambahMahasiswa() { // tambah Mahasiswa
    const insert = `INSERT INTO mahasiswa (nim, nama, alamat, jurusan) VALUES (?,?,?,?)`
    console.log('========================================================')
    console.log('Lengkapi data di bawah ini: ')
    rl.question('NIM: ', (inputTambah1) => {
        rl.question('Nama: ', (inputTambah2) => {
            rl.question('Alamat: ', (inputTambah3) => {
                rl.question('Jurusan: ', (inputTambah4) => {
                    db.run(insert, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4]], (err) => {
                        if (err) {
                            console.log('Error insert', err)
                            tambahMahasiswa()
                        } else {
                            daftarMahasiswa()

                        }
                    })

                }
                )
            }
            )
        }

        )
    }
    )
}

function hapusMahasiswa() { // Hapus Mahasiswa
    console.log('========================================================')
    rl.question('Masukkan NIM mahasiswa yang akan dihapus: ', (inputdelete) => {
        db.run(`DELETE FROM mahasiswa WHERE nim=?`, [inputdelete], (err) => {
            if (err) {
                console.log(`Gagal hapus Mahasiswa`, err)
                menuMahasiswa()

            } else {
                console.log(`Mahasiswa dengan nim ${inputdelete} telah di hapus`)
                daftarMahasiswa()
            }
        })
    }
    )

}

// Fungsi-fungsi Dosen dan Menu Dosen

function menuDosen() {// Menu Dosen
    console.log('========================================================');
    console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Dosen\n[2] Cari Dosen\n[3] Tambah Dosen\n[4] Hapus Dosen\n[5] Keluar\n`)
    console.log('========================================================');
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
        if (input2 == 1) { //Daftar Dosen
            daftarDosen()
        }

        else if (input2 == 2) { // Cari Dosen
            cariDosen()
        }

        else if (input2 == 3) {// Tambah Dosen
            tambahDosen()
        }

        else if (input2 == 4) {// Hapus Dosen
            hapusDosen()
        }

        else if (input2 == 5) {// Kembali
            menuUtama()
        }

        else {
            console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
            menuDosen()
        }

    })
}

function daftarDosen() { // Daftar Dosen
    let tabledosen = new table({
        head: ['NIDN', 'NAMA'],
        colWidths: [20, 20]
    });
    console.log('========================================================')
    db.all("SELECT * FROM dosen", (err, rows) => {
        if (err) {
            console.log('data anda error', err)
            process.exit(0)
        }
        else if (rows.length > 0) {
            rows.forEach((dosen => {
                tabledosen.push([dosen.nidn, dosen.nama])
            }))
            console.log(tabledosen.toString())
            menuDosen()

        } else {
            console.log('salah Daftar table')
        }

    }
    )
}

function cariDosen() { // Cari Dosen
    console.log('========================================================')
    rl.question('Masukan NIDN: ', (inputCari) => {
        db.get("SELECT * FROM dosen WHERE nidn=?", [inputCari], (err, dosen) => {
            if (err) {
                return console.log('Data error', err)
            }

            else if (dosen) {
                console.log('========================================================')
                console.log('Lecturer Details')
                console.log('========================================================')
                console.log(`
NIDN        :${dosen.nidn}
Nama        :${dosen.nama}\n`)
                menuDosen()
            } else {
                console.log('NIDN tidak ditemukan')
                cariDosen()
            }
        }
        )
    })
}

function tambahDosen() { // Tambah Dosen
    const insert = `INSERT INTO dosen (nidn, nama) VALUES (?,?)`
    console.log('========================================================')
    console.log('Lengkapi data di bawah ini: ')
    rl.question('NIDN: ', (inputTambah1) => {
        rl.question('Nama: ', (inputTambah2) => {
            db.run(insert, [[inputTambah1], [inputTambah2]], (err) => {
                if (err) {
                    console.log('Error insert', err)

                } else {
                    daftarDosen()
                    console.log('========================================================')
                    menuDosen()
                }
            })

        }
        )
    }
    )
}

function hapusDosen() { // Hapus Dosen
    console.log('========================================================')
    rl.question('Masukkan NIDN Dosen yang akan dihapus: ', (inputdelete) => {
        db.run(`DELETE FROM dosen WHERE nidn=?`, [inputdelete], (err) => {
            if (err) {
                console.log(`Gagal hapus Dosen ${inputdelete}`)
                menuDosen()

            } else {
                console.log(`Dosen dengan NIDN: ${inputdelete} telah terhapus`)
                daftarDosen()
            }
        })
    }
    )

}

// Fungsi-fungsi Jurusan dan Menu Jurusan

function menuJurusan() {// Menu Jurusan
    console.log('========================================================');
    console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Jurusan\n[2] Cari Jurusan\n[3] Tambah Jurusan\n[4] Hapus Jurusan\n[5] Keluar\n`)
    console.log('========================================================');
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
        if (input2 == 1) { //Daftar Jurusan
            daftarJurusan()
        }

        else if (input2 == 2) { // Cari Jurusan
            cariJurusan()
        }

        else if (input2 == 3) {// Tambah Jurusan
            tambahJurusan()
        }

        else if (input2 == 4) {// Hapus Jurusan
            hapusJurusan()

        }

        else if (input2 == 5) {// Kembali
            menuUtama()
        }

        else {
            console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
            menuJurusan()
        }

    })
}

function daftarJurusan() { // Daftar Jurusan
    let tablejurusan = new table({
        head: ['KodeJurusan', 'NamaJurusan'],
        colWidths: [20, 20]
    });
    console.log('========================================================')
    db.all("SELECT * FROM jurusan", (err, rows) => {
        if (err) {
            console.log('data anda error', err)
            process.exit(1)
        }
        else if (rows.length > 0) {
            rows.forEach((jurusan => {
                tablejurusan.push([jurusan.kodejurusan, jurusan.namaJurusan])
            }))
            console.log(tablejurusan.toString())
            menuJurusan()

        } else {
            console.log('salah table jurusan')
        }

    }
    )
}

function cariJurusan() { // Cari Jurusan
    console.log('========================================================')
    rl.question('Masukan KodeJurusan: ', (inputCari) => {
        db.get("SELECT * FROM jurusan WHERE kodejurusan=?", [inputCari], (err, jurusan) => {
            if (err) {
                return console.log('Data error', err)
            }

            else if (jurusan) {
                console.log('========================================================')
                console.log('Major Details')
                console.log('========================================================')
                console.log(`
KodeJurusan     :${jurusan.kodejurusan}
NamaJurusan     :${jurusan.namaJurusan}\n`)
                menuJurusan()
            } else {
                console.log('KodeJurusan tidak ditemukan')
                cariJurusan()
            }
        }
        )
    })
}

function tambahJurusan() { // Tambah Jurusan
    const insert = `INSERT INTO jurusan (kodejurusan, namaJurusan) VALUES (?,?)`
    console.log('========================================================')
    console.log('Lengkapi data di bawah ini: ')
    rl.question('KodeJurusan: ', (inputTambah1) => {
        rl.question('NamaJurusan: ', (inputTambah2) => {
            db.run(insert, [[inputTambah1], [inputTambah2]], (err) => {
                if (err) {
                    console.log('Error insert', err)

                } else {
                    daftarJurusan()
                    console.log('========================================================')
                    menuJurusan()
                }
            })

        }
        )
    }
    )
}

function hapusJurusan() { // Hapus Jurusan
    console.log('========================================================')
    rl.question('Masukkan KodeJurusan yang akan dihapus: ', (inputdelete) => {
        db.run(`DELETE FROM jurusan WHERE kodejurusan=?`, [inputdelete], (err, data) => {
            if (err) {
                console.log(`Gagal hapus Jurusan ${inputdelete}`)
                menuJurusan()
            }

            else {
                console.log(`Jurusan dengan KodeJurusan: ${inputdelete} telah terhapus`)
                daftarJurusan()
            }
        })
    }
    )

}


// Fungsi-fungsi Matakuliah dan Menu Matakuliah

function menuMatakuliah() {// Menu Matakuliah
    console.log('========================================================');
    console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar MataKuliah\n[2] Cari MataKuliah\n[3] Tambah MataKuliah\n[4] Hapus MataKuliah\n[5] Keluar\n`)
    console.log('========================================================');
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
        if (input2 == 1) { //Daftar Matakuliah
            daftarMatakuliah()
        }

        else if (input2 == 2) { // Cari Matakuliah
            cariMatakuliah()
        }

        else if (input2 == 3) {// Tambah Matakuliah
            tambahMatakuliah()
        }

        else if (input2 == 4) {// Hapus Matakuliah
            hapusMatakuliah()

        }

        else if (input2 == 5) {// Kembali
            menuUtama()
        }

        else {
            console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
            menuMatakuliah()
        }

    })
}

function daftarMatakuliah() { // Daftar Matkul
    let tablematkul = new table({
        head: ['KodeMatkul', 'NAMA', 'SKS'],
        colWidths: [20, 20, 20]
    });
    console.log('========================================================')
    db.all("SELECT * FROM matkul", (err, rows) => {
        if (err) {
            console.log('data anda error', err)
            process.exit(1)
        }
        else if (rows.length > 0) {
            rows.forEach((matkul => {
                tablematkul.push([matkul.kodematkul, matkul.nama, matkul.SKS])
            }))
            console.log(tablematkul.toString())
            menuMatakuliah()

        } else {
            console.log('salah table matakuliah')
        }
    })
}

function cariMatakuliah() { // Cari Matkul
    console.log('========================================================')
    rl.question('Masukan kodematkul: ', (inputCari) => {
        db.get("SELECT * FROM matkul WHERE kodematkul=?", [inputCari], (err, matkul) => {
            if (err) {
                console.log('Data error', err)
                process.exit(1)
            }

            else if (matkul) {
                console.log('========================================================')
                console.log('Course Details')
                console.log('========================================================')
                console.log(`
KodeMatkul      :${matkul.kodematkul}
Nama            :${matkul.nama}
SKS             :${matkul.SKS}\n`)
                menuMatakuliah()
            } else {
                console.log('KodeMatkul tidak ditemukan')
                cariMatakuliah()
            }
        }
        )
    })
}

function tambahMatakuliah() { // Tambah Matkul
    const insert = `INSERT INTO matkul (kodematkul, nama, SKS) VALUES (?,?,?)`
    console.log('========================================================')
    console.log('Lengkapi data di bawah ini: ')
    rl.question('KodeMatkul: ', (inputTambah1) => {
        rl.question('Nama: ', (inputTambah2) => {
            rl.question('SKS: ', (inputTambah3) => {
                db.run(insert, [[inputTambah1], [inputTambah2], [inputTambah3]], (err) => {
                    if (err) {
                        console.log('Error insert', err)

                    } else {
                        daftarMatakuliah()
                        console.log('========================================================')
                        menuMatakuliah()
                    }
                })

            }
            )
        }
        )
    }

    )
}

function hapusMatakuliah() { // Hapus Matkul
    console.log('========================================================')
    rl.question('Masukkan KodeMatkul Matakuliah yang akan dihapus: ', (inputdelete) => {
        db.run(`DELETE FROM matkul WHERE kodematkul=?`, [inputdelete], (err) => {
            if (err) {
                console.log(`Gagal hapus MataKuliah ${inputdelete}`)
                menuMatakuliah()

            } else {
                console.log(`Matakuliah dengna KodeMatkul ${inputdelete} telah terhapus`)
                daftarMatakuliah()
            }
        })
    }
    )

}

// Fungsi-fungsi Kontrak dan Menu Kontrak

function menuKontrak() {// Menu Kontrak
    console.log('========================================================');
    console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Kontrak\n[2] Cari Kontrak\n[3] Tambah Kontrak\n[4] Hapus Kontrak\n[5] Keluar\n`)
    console.log('========================================================');
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
        if (input2 == 1) { //Daftar Kontrak
            daftarKontrak()
        }

        else if (input2 == 2) { // Cari Kontrak
            cariKontrak()
        }

        else if (input2 == 3) {// Tambah Kontrak
            tambahKontrak()
        }

        else if (input2 == 4) {// Hapus Kontrak
            hapusKontrak()

        }

        else if (input2 == 5) {// Kembali
            menuUtama()
        }

        else {
            console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
            menuKontrak()
        }

    })
}

function daftarKontrak() { //Daftar Kontrak
    let tablekontrak = new table({
        head: ['ID', 'NIM', 'NIDN', 'KodeMatkul', 'Nilai'],
        colWidths: [20, 20, 20, 20, 20]
    });
    console.log('========================================================')
    db.all("SELECT * FROM kontrak", (err, rows) => {
        if (err) {
            console.log('data anda error', err)
            process.exit(1)
        }
        else if (rows.length > 0) {
            rows.forEach((kontrak => {
                tablekontrak.push([kontrak.id, kontrak.nim, kontrak.nidn, kontrak.kodematkul, kontrak.nilai])
            }))
            console.log(tablekontrak.toString())
            menuKontrak()

        } else {
            console.log('salah table Kontrak')
        }
    })
}

function cariKontrak() { // Cari Kontrak
    console.log('========================================================')
    rl.question('Masukan ID: ', (inputCari) => {
        db.get("SELECT * FROM kontrak WHERE id=?", [inputCari], (err, kontrak) => {
            if (err) {
                return console.log('Data error', err)
            }

            else if (kontrak) {
                console.log('========================================================')
                console.log('Contract Details')
                console.log('========================================================')
                console.log(`
ID              :${kontrak.id}
NIM             :${kontrak.nim}
NIDN            :${kontrak.nidn}
KodeMatkul      :${kontrak.kodematkul}
Nilai           :${kontrak.nilai}\n`)
                menuKontrak()
            } else {
                console.log('ID tidak ditemukan')
                cariKontrak()
            }
        }
        )
    })
}

function tambahKontrak() { // Tambah Kontrak
    const insert = `INSERT INTO kontrak (nim, nidn, kodematkul, nilai) VALUES (?,?,?,?)`
    console.log('========================================================')
    console.log('Lengkapi data di bawah ini: ')
    rl.question('NIM: ', (inputTambah1) => {
        rl.question('NIDN: ', (inputTambah2) => {
            rl.question('KodeMatkul: ', (inputTambah3) => {
                rl.question('Nilai: ', (inputTambah4) => {
                    db.run(insert, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4]], (err) => {
                        if (err) {
                            console.log('Error insert', err)

                        } else {
                            daftarKontrak()
                            console.log('========================================================')
                            menuKontrak()
                        }
                    })

                }
                )
            }
            )
        }
        )
    })
}

function hapusKontrak() { // Hapus Kontrak
    console.log('========================================================')
    rl.question('Masukkan ID yang akan dihapus: ', (inputdelete) => {
        db.run(`DELETE FROM kontrak WHERE id=?`, [inputdelete], (err) => {
            if (err) {
                console.log(`Gagal hapus kontrak: ${inputdelete}`)
                menuKontrak()
            }
            else {
                console.log(`Kontrak dengan ID: ${inputdelete} tidak terdaftar`)
                daftarKontrak()
            }
        })
    }
    )

}

