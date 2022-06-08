
const process = require('process')
var args = process.argv;
if (args[2]){ 
    console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini ${args[2]}.`)
    console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.')
    console.log('Gunakan "skip" untuk menangguhkan pertanyaannya dan di akhir pertanyaan  akan ditanyakan lagi.')
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban:'
});
const file = fs.readFileSync(args[2], 'utf-8')

var soal = JSON.parse(file)
var next = 0
var salah = 0
console.log(`Pertanyaan: ${soal[next].definition}`)
rl.prompt();

rl.on('line', (jawaban) => {
    if (jawaban == 'skip') {
        salah -= salah
        soal.push(soal[next])
        next++
        console.log(`Pertanyaan: ${soal[next].definition}`)
        rl.prompt();
    } else if (jawaban.toLowerCase() == soal[next].term) {
        console.log('Anda Beruntung!')
        next++
        if (next < soal.length) {
            console.log(`Pertanyaan: ${soal[next].definition}`)
            rl.prompt();
        }  if (next == soal.length) {
            console.log('Anda Berhasil!')
            rl.close()
        }
    } else if (jawaban.toLowerCase() != soal[next].term) {
        salah++
        console.log(`Anda Kurang Beruntung! anda telah salah ${salah} kali, silahkan coba lagi. `)
        rl.prompt()
    }

})
} else {
    console.log('Tolong sertakan file sebagai inputan soalnya')
    console.log('Misalkan "Challenge12.js data.json"')
}