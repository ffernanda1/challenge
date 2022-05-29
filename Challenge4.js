function indexPrime(param1) {

    //write your code here
    function checkPrime(n) {
        let prime = true
        if (n === 1) {
            console.log('bukan nomor prima')
        }
        else if (n > 1) {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    prime = false
                    break;
                }
            }
            if (prime) {
                return true
            } else {
                return false
            }
        }
    }

    var indexprim = []

    for (let i = 2; i < Infinity; i++) {
        if (checkPrime(i)) {
            indexprim.push(i)
        }
        if (indexprim.length == param1) {
            break;
        }

    } return indexprim[param1 -1]
}

console.log(indexPrime(4)) //result ==> 7
console.log(indexPrime(500)) //result ==> 3571
console.log(indexPrime(37786)) //result => 450881





