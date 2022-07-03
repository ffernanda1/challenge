import ViewDasar from "./ViewUser.js";

export default class ViewJurusan {

    static menuJurusan() {
        console.log('========================================================');
        console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Jurusan\n[2] Cari Jurusan\n[3] Tambah Jurusan\n[4] Hapus Jurusan\n[5] Keluar\n`)
        console.log('========================================================');
    }

    static detailJurusan(jurusan) {
        ViewDasar.line()
        console.log('Major Details')
        ViewDasar.line()
        console.log(`
KodeJurusan     :${jurusan.kodejurusan}
NamaJurusan     :${jurusan.namaJurusan}\n`)
    }

    
}