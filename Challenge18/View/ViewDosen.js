import ViewDasar from "./ViewUser.js";

export default class ViewDosen {
    static menuDosen() {// Menu Dosen
        ViewDasar.line();
        console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Dosen\n[2] Cari Dosen\n[3] Tambah Dosen\n[4] Hapus Dosen\n[5] Keluar\n`)
        ViewDasar.line();
    }

    static detailDosen(dosen) {
        ViewDasar.line()
        console.log('Lecturer Details')
        ViewDasar.line()
        console.log(`
NIDN        :${dosen.nidn}
Nama        :${dosen.nama}\n`)
    }

    
}