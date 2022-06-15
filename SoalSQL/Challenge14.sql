CREATE TABLE jurusan (
    kodejurusan    VARCHAR(5) PRIMARY KEY NOT NULL,
    namaJurusan    TEXT NOT NULL 
);

CREATE TABLE mahasiswa (
    nim             VARCHAR(6) PRIMARY KEY NOT NULL,
    nama            VARCHAR(100) NOT NULL,
    alamat          TEXT NOT NULL,
    jurusan         VARCHAR(5) NOT NULL,
    FOREIGN KEY (jurusan) REFERENCES jurusan (kodejurusan)
);

CREATE TABLE dosen (
    nipdosen        VARCHAR(4) PRIMARY KEY NOT NULL,
    nama            VARCHAR(100) NOT NULL
);

CREATE TABLE matakuliah (
    kodematkul      VARCHAR(5) PRIMARY KEY NOT NULL,
    nama            VARCHAR(100) NOT NULL,
    SKS             INTEGER
);

CREATE TABLE kontrak (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    nim             VARCHAR(6) NOT NULL,
    nidn            VARCHAR(4) NOT NULL,
    kodematkul      VARCHAR(5) NOT NULL,
    nilai           VARCHAR(2),
    foreign key (nim) references mahasiswa(nim),
    foreign key (nidn) references dosen(nidn),
    foreign key (kodematkul) references matkul(kodematkul)        
);

insert into jurusan(kodejurusan, namaJurusan) VALUES ('J0020', 'ILS');
insert into jurusan(kodejurusan, namaJurusan) VALUES ('J0022', 'NDB');
insert into jurusan(kodejurusan, namaJurusan) VALUES ('J0024', 'DVOR');


insert into mahasiswa(nim, nama, alamat, jurusan) VALUES ('C10010', 'Himawan', 'Bandung', 'J0020');
insert into mahasiswa(nim, nama, alamat, jurusan) VALUES ('C10020', 'Wildan', 'Bandung', 'J0022');
insert into mahasiswa(nim, nama, alamat, jurusan) VALUES ('C10030', 'Fernanda', 'Makasar', 'J0024');
insert into mahasiswa(nim, nama, alamat, jurusan) VALUES ('C10040', 'Rahmat', 'Makasar', 'J0024');


insert into dosen(nidn, nama) VALUES ('D010', 'Joko');
insert into dosen(nidn, nama) VALUES ('D011', 'Gatot');
insert into dosen(nidn, nama) VALUES ('D012', 'Wening');


insert into matkul(kodematkul, nama, SKS) VALUES ('N0010', 'Non-Directional Beacon', 2 );
insert into matkul(kodematkul, nama, SKS) VALUES ('N0012', 'Instrument Landing System', 3 );
insert into matkul(kodematkul, nama, SKS) VALUES ('N0014', 'Directional VOR', 2 );
insert into matkul(kodematkul, nama, SKS) VALUES ('N0016', 'Monopulse Secondary', 2 );


insert into kontrak(nim, nidn, kodematkul, nilai) VALUES ('C10010', 'D010', 'N0010', 'A');
insert into kontrak(nim, nidn, kodematkul, nilai) VALUES ('C10020', 'D011', 'N0012', 'A');
insert into kontrak(nim, nidn, kodematkul, nilai) VALUES ('C10030', 'D012', 'N0014', 'B');
insert into kontrak(nim, nidn, kodematkul, nilai) VALUES ('C10040', 'D012', 'N0016', 'AB');
