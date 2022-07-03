import ViewDasar from "./ViewUser.js";

export default class ViewMahasiswa {

    static menuMahasiswa() {
        ViewDasar.line();
        console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Murid\n[2] Cari Murid\n[3] Tambah Murid\n[4] Hapus Murid\n[5] Keluar\n`)
        ViewDasar.line();
    }

    static detailMahasiswa(mahasiswa) {
        ViewDasar.line()
        console.log('Student Details')
        ViewDasar.line()
        console.log(
            `
NIM         :${mahasiswa.nim}
Nama        :${mahasiswa.nama}
Alamat      :${mahasiswa.alamat}
Jurusan     :${mahasiswa.jurusan}\n`)
    }



}