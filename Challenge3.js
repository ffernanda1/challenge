function romawi(n) {
    //Write your code here
    let roma = [[1000,'M'], [900,'CM'], [500,'D'], [400,'CD'], [100,'C'],[90, 'XC'], [50,'L'] , [40,'XL'], [10,'X'], [9,'IX'], [5,'V'], [4,'IV'], [1,'I']]
    
    for (let i = 0; i < roma.length; i++) {
        if (n >= roma[i][0]) {
            return roma[i][1] + romawi(n - roma[i][0]);
       }
    } 
}

    


    



console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("______|__________|_______");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MCDXLVI  | ", romawi(1646));