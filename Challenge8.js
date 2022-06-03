function pola(str) {
// //write your code here
        
    let p = str.split(" ");
    for (let i = 0; i < 10; i++) {
        for (let h = 0; h < 10; h++) {
            let awal = Number(p[0].replace("#", i));
            let akhir = Number(p[4].replace("#", h));
            let tengah = Number(p[2])
        
            if (awal * tengah == akhir) {
                 return [i, h]
            } 
        }
    }
}


console.log(pola("42#3 * 188 = 80#204"));
// // //result: [8, 5]

console.log(pola("8#61 * 895 = 78410#5"));
// // //result: [7, 9]
