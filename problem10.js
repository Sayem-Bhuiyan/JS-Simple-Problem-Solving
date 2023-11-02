/*
you will be provided an array of numbers. 
you have to return array of prime numbers form that input arry.
*/ 

function findPrimeNumbers(arr){
    if(!Array.isArray(arr)){
        return 'Please provide me a valid array';
    }
    else {
        let primes = [];
        for (let item of arr){
            if ( item > 1){
                let isPrime = true;
                for (let i = 2; i < item; i++){
                    if(item % i === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primes.push(item);
                }
            }
        }
        return primes;
    }
}
const newNumber = [ 1, 4, 6, 8, 9];
const numbers = [32, 43, 5, 2, 7, 97, 17, 19, 34, 21];
console.log(findPrimeNumbers(numbers));