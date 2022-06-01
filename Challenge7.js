function weirdMultiply(sentence) {
    //     //write your code here
    let s = ("" + sentence).split("")
    let total = 1
    for (let i = 0; i < s.length; i++) {
        total *= s[i]
    }

    if (total < 10) {
        return total}
    else {
       return weirdMultiply(total)
    }
}







console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit

