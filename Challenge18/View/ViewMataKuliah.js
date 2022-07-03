import ViewDasar from "./ViewUser.js";

export default class ViewMatakuliah {

    static menuMatakuliah() {
        ViewDasar.line();
        console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar MataKuliah\n[2] Cari MataKuliah\n[3] Tambah MataKuliah\n[4] Hapus MataKuliah\n[5] Keluar\n`)
        ViewDasar.line();
    }

    static detailMatakuliah(matkul) {
        ViewDasar.line()
        console.log('Course Details')
        ViewDasar.line()
        console.log(`
KodeMatkul      :${matkul.kodematkul}
Nama            :${matkul.nama}
SKS             :${matkul.SKS}\n`)
    }

}