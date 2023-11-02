// find the prime numbers from an array

function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return 'Please input a valid array';
    }
    else {
        let primeNumbers = [];
        for (let item of arr){
            if ( item > 1){
                let isPrime = true;
                for( let i = 2; i < item; i++){
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primeNumbers.push(item);
                }
            }
        }
        return primeNumbers;
    }
}

const numbers = [2, 4, 5, 7, 9, 11, 23, 12, 45, 67];
const primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers);