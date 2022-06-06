function sentencesManipulation(sentence) {
    //write your code here
    let result = []
    function vocal(sub) {
        var hasil = sub.substring(0, 1)
        var hasil2 = sub.substr(1)
        if (sub.startsWith('a') || sub.startsWith('i') || sub.startsWith('u') || sub.startsWith('e') || sub.startsWith('o')) {
            return sub
        } else {
            return hasil2 + hasil + 'nyo'
        }
    }
    let mysentence = sentence.split(" ");
    for (let i = 0; i < mysentence.length; i++) {
        result.push(vocal(mysentence[i]))
    }
    console.log(result.join(" "))

}

sentencesManipulation('ibu pergi ke pasar bersama aku');

// output 'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'

