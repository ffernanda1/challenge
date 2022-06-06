function indexPrime(param1) {

    //write your code here
    
    let counter = 0
    for (let j = 2; j < Infinity; j++) {
       
        
    
    let isPrime = true
            for (let i = 2; i <= Math.sqrt(j); i++) {
                if (j % i == 0) {
                    isPrime = false
                }
            }

        if (isPrime) {
            counter++
        }
        if (param1 == counter) {
            return j
        }

    } 
}

console.log(indexPrime(10)) //result ==> 7
console.log(indexPrime(500)) //result ==> 3571
console.log(indexPrime(37786)) //result => 450881





