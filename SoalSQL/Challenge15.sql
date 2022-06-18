1. select mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.jurusan, jurusan.namaJurusan from mahasiswa 
join jurusan on mahasiswa.jurusan = jurusan.kodeJurusan;

2. select * from mahasiswa where umur < '20';

3. select kontrak.nim, mahasiswa.nama, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join dosen on kontrak.nidn = dosen.nidn join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where nilai = 'AB' or nilai = 'A';

4. select kontrak.nim, mahasiswa.nama, sum(matkul.sks) as JumlahSKS from kontrak 
join matkul on matkul.kodematkul = kontrak.kodematkul join mahasiswa on kontrak.nim = mahasiswa.nim group by mahasiswa.nim having sum(matkul.sks) > 10;

5. select kontrak.nim, mahasiswa.nama, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join dosen on kontrak.nidn = dosen.nidn join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where kontrak.kodematkul = 'N0018'; 

6. select kontrak.nidn, dosen.nama, count(distinct mahasiswa.nim) as JumlahMahasiswa from kontrak 
join dosen on kontrak.nidn = dosen.nidn join mahasiswa on kontrak.nim = mahasiswa.nim group by dosen.nama;

7. select * from mahasiswa order by umur DESC;

8. select kontrak.nim, mahasiswa.nama, jurusan.kodejurusan, jurusan.namaJurusan, kontrak.nidn, dosen.nama, kontrak.kodematkul, matkul.nama, kontrak.nilai from kontrak 
join jurusan on mahasiswa.jurusan = jurusan.kodejurusan join dosen on kontrak.nidn = dosen.nidn 
join mahasiswa on kontrak.nim = mahasiswa.nim join matkul on kontrak.kodematkul = matkul.kodematkul where nilai = 'D' or nilai = 'E';