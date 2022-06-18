select mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.jurusan, jurusan.namaJurusan from mahasiswa 
join jurusan on mahasiswa.jurusan = jurusan.kodeJurusan;

select * from mahasiswa where umur < '20';

select kontrak.nim, mahasiswa.nama, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join dosen on kontrak.nidn = dosen.nidn join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where nilai = 'AB' or nilai = 'AB';

select kontrak.nim, mahasiswa.nama, sum(matkul.sks) as JumlahSKS from kontrak 
join matkul on matkul.kodematkul = kontrak.kodematkul join mahasiswa on kontrak.nim = mahasiswa.nim group by mahasiswa.nim having sum(matkul.sks) > 10;

select kontrak.nim, mahasiswa.nama, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join dosen on kontrak.nidn = dosen.nidn join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where kontrak.kodematkul = 'N0018'; 

select kontrak.nidn, dosen.nama, count(kontrak.nim) as JumlahMahasiswa from kontrak join dosen on kontrak.nidn = dosen.nidn group by dosen.nama;

select * from mahasiswa order by umur DESC;

select kontrak.nim, mahasiswa.nama, jurusan.kodejurusan, jurusan.namaJurusan, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join jurusan on mahasiswa.jurusan = jurusan.kodejurusan join dosen on kontrak.nidn = dosen.nidn 
join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where nilai = 'D' or nilai = 'E';