function deretKaskus(n){
    //write code here
    let angka = []
    for (let i = 1; i <= n; i++) {
        let a = i * 3;
        if (a % 5 == 0 && a % 6 == 0) {
            angka.push('KASKUS')
        } else if (a % 6 == 0) {
            angka.push('KUS')
        } else if (a % 5 == 0) {
            angka.push('KAS')
        } else {
            angka.push(a)
        }
    }return angka
}
    
    
    

    
      



console.log(deretKaskus(10));
