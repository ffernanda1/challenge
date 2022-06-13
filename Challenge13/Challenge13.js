console.log('>>> JS TODO <<<')
console.log('$ node Challenge13.js <command>')
console.log('$ node Challenge13.js list')
console.log('$ node Challenge13.js task <task_id>')
console.log('$ node Challenge13.js add <task_content>')
console.log('$ node Challenge13.js delete <task_id>')
console.log('$ node Challenge13.js complete <task_id>')
console.log('$ node Challenge13.js uncomplete <task_id>')
console.log('$ node Challenge13.js list:outstanding asc|desc')
console.log('$ node Challenge13.js list:completed asc|desc')
console.log('$ node Challenge13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>')
console.log('$ node Challenge13.js filter:<tag_name>')


const process = require('process');
var args = process.argv;
const fs = require('fs')
const readline = require('readline')
const file = JSON.parse(fs.readFileSync('todo.JSON', 'utf-8'))

if (args[2] == 'list') {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < file.length; i++) {
        console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

    }
}
if (args[2] == 'task') {
    console.log('Daftar Pekerjaan')
    let i = args[3] - 1

    console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

}

if (args[2] == 'add') {
    let test = {
        "nama_task": args.slice(3).join(' '),
        "selesai": false,
        "tag_name": []
    }
    file.push(test)
    fs.writeFileSync('todo.JSON', JSON.stringify(file, null, 3), 'utf-8')
    console.log(`"${args.slice(3).join(' ')}" telah ditambahkan.`)
}

if (args[2] == 'delete') {
    let i = args[3] - 1
    console.log(`"${file[i].nama_task}" telah dihapus dari daftar.`)
    file.splice(i, 1)
    fs.writeFileSync('todo.JSON', JSON.stringify(file, null, 3), 'utf-8')
    
}
if (args[2] == 'complete') {
    let i = args[3] - 1
    file[i].selesai = true
    console.log(`"${file[i].nama_task}" telah selesai.`)
    fs.writeFileSync('todo.JSON', JSON.stringify(file, null, 3), 'utf-8')

}
if (args[2] == 'uncomplete') {
    let i = args[3] - 1
    file[i].selesai = false
    console.log(`"${file[i].nama_task}" status telah dibatalkan.`)
    fs.writeFileSync('todo.JSON', JSON.stringify(file, null, 3), 'utf-8')
}

if (args[2] == 'list:outstanding' && args[3] == 'asc') {
    console.log('Daftar Pekerjaan')

    for (let i = 0; i < file.length; i++) {
        if (file[i].selesai == false) {
            console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

        }
    }

}

if (args[2] == 'list:completed' && args[3] == 'asc') {
    console.log('Daftar Pekerjaan')

    for (let i = 0; i < file.length; i++) {
        if (file[i].selesai == true) {
            console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

        }
    }

}

if (args[2] == 'list:outstanding' && args[3] == 'desc') {
    console.log('Daftar Pekerjaan')

    for (let i = file.length - 1; i >= 0; i--) {
        if (file[i].selesai == false) {
            console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

        }
    }

}

if (args[2] == 'list:completed' && args[3] == 'desc') {
    console.log('Daftar Pekerjaan')

    for (let i = file.length - 1; i >= 0; i--) {
        if (file[i].selesai == true) {
            console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)

        }
    }

}

if (args[2] == 'tag') {
    let j = args[3] - 1
    let a = args.slice(4)

    for (let i = 0; i < a.length; i++) {
        file[j].tag_name.push(a[i])
    }
    fs.writeFileSync('todo.JSON', JSON.stringify(file, null, 3), 'utf-8')
    console.log(`Tag ${a} telah ditambahkan ke daftar ${file[j].nama_task}`)
}

if (args[2] == 'filter:') {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < file.length; i++) {
        if (file[i].tag_name.includes(args[3])) {
            console.log(`${i + 1} [${file[i].selesai ? "X" : " "}] ${file[i].nama_task}`)
        }
    }
}