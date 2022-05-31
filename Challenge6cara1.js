function sentencesManipulation(sentence) {
    //write your code here

    function vocal(sub) {
        var hasil = sub.substring(0, 1)
        var hasil2 = sub.substr(1)
        if (sub.startsWith('a') || sub.startsWith('i') || sub.startsWith('u') || sub.startsWith('e') || sub.startsWith('o')) {
            console.log(sub)
        } else {
            console.log(hasil2 + hasil + 'nyo')
        }
    }
    
    let mysentence = sentence.split(" ");

    mysentence.map(vocal);

}

sentencesManipulation('ibu pergi ke pasar bersama aku');

// output 'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'

