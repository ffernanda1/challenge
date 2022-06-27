
import MesinHitung, {Pi} from "./Challenge17.js"

var mh = new MesinHitung();

mh.tambah(10).kurang(5).hasil();
mh.tambah(3).kali(4).bagi(6).hasil();
mh.x = 7;
console.log(`nilai sekarang ${mh.x}`);
mh.kali(2).kali(Pi).hasil();
mh.x = 7;
mh.pangkatDua().kali(Pi).hasil();
mh.x = 4;
mh.pangkat(3).hasil();
mh.akarPangkat().hasil();
