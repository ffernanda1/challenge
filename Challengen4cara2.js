function indexPrime(param1) {

    //write your code here
    function checkPrime(n) {
    
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    return false
                }
            }
            return true
            
        }
    


    let counter = 0

    for (let i = 2; i < Infinity; i++) {
        if (checkPrime(i)) {
            counter++
        }
        if (param1 == counter) {
            return i
        }

    } 
}

console.log(indexPrime(4)) //result ==> 7
console.log(indexPrime(500)) //result ==> 3571
console.log(indexPrime(37786)) //result => 450881





