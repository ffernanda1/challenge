

export default class ViewDasar {

    static line() {
        console.log('=============================================')
    }


    static menuUtama() {
        ViewDasar.line()
        console.log(`silahkan pilih opsi di bawah ini\n[1] Mahasiswa\n[2] Jurusan\n[3] dosen\n[4] mata kuliah\n[5] kontrak\n[6] keluar`)
        ViewDasar.line()
    }

    static welcome() {
        ViewDasar.line()
        console.log('Welcome to University California\nJl. SetiaBudi no. 255')
        ViewDasar.line()
    }

    static lengkapi() {
        ViewDasar.line
        console.log('Lengkapi data di bawah ini: ')
    }
}