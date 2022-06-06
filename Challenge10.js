const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini >'
});

rl.prompt();

rl.on('line', (line) => {
    let mysentence = line.split(" ");
    var string = []
    for (let i = 0; i < mysentence.length; i++) {
        var hasil = mysentence[i].substring(0, 1)
        var hasil2 = mysentence[i].substr(1)
        if (mysentence[i][0] == 'a' || mysentence[i][0] == 'i' || mysentence[i][0] == 'u' || mysentence[i][0] == 'e' || mysentence[i][0] == 'o') {
            string.push(mysentence[i])
        } else {
            string.push(hasil2 + hasil + 'nyo')
        }
    } 
    let str = string.join(" ")
    console.log(str)

    rl.prompt();
}).on('close', () => {
    console.log('Good Bye!');
    process.exit(0);
})