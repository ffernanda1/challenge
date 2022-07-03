import ViewDasar from "./ViewUser.js";

export default class ViewKontrak {

    static menuKontrak() {
        ViewDasar.line();
        console.log(`silahkan pilih opsi di bawah ini\n[1] Daftar Kontrak\n[2] Cari Kontrak\n[3] Tambah Kontrak\n[4] Hapus Kontrak\n[5] Keluar\n`)
        ViewDasar.line();
    }

    static detailKontrak(kontrak) {
        ViewDasar.line()
        console.log('Contract Details')
        ViewDasar.line()
        console.log(`
ID              :${kontrak.id}
NIM             :${kontrak.nim}
NIDN            :${kontrak.nidn}
KodeMatkul      :${kontrak.kodematkul}
Nilai           :${kontrak.nilai}\n`)
    }

}