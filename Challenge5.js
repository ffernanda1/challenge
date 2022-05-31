function stringManipulation(word) {
    //write your code here
    var hasil = word.substring(0,1)
    var hasil2 = word.substr(1)
    if (word.startsWith('a') || word.startsWith('i') || word.startsWith('u') || word.startsWith('e') || word.startsWith('o')) {
        console.log(word)
    } else {
       console.log(hasil2 + hasil + 'nyo')
    }
}

stringManipulation('ayam'); //"ayam"
stringManipulation('bebek'); //"ebekbnyo"

