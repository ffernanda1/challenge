function sentencesManipulation(sentence) {
    //write your code here
    let mysentence = sentence.split(" ");
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
    
}


sentencesManipulation('ibu pergi ke pasar bersama aku');

// output 'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'

