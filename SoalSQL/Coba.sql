
Table Matkul
create table matkul(kodematkul varchar(5) primary key not null, nama varchar(100) not null, SKS integer);

Table mahasiswa
create table mahasiswa(nim varchar(6) primary key not null, nama varchar(100) not null, alamat text not null, jurusan varchar(5) not null, 
foreign key (jurusan) references jurusan(kodejurusan));

Table jurusan
create table jurusan(kodejurusan varchar(5) primary key not null, namaJurusan text not null);

Table dosen
create table dosen(nidn varchar(4) primary key not null, nama varchar(100) not null);

Table kontrak
create table kontrak(id integer primary key autoincrement, nim varchar(6) not null, nidn varchar(4) not null, kodematkul varchar(5) not null, nilai varchar(2), 
foreign key (nim) references mahasiswa(nim), foreign key (nidn) references dosen(nidn), foreign key (kodematkul) references matkul(kodematkul));
