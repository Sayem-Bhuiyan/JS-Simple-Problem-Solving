/*
function nam sumOfN() you will be provided a number n.
you have to calculate the total of all numbers 1 to n. use function recursion.
*/ 

// normal function

// function sumOfN(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumOfN(20));


// using recursion function
function sumOfN(n){
    if ( n === 1){
        return 1;
    }
    else {
        return n + sumOfN(n - 1);
    }
}
const n = 5;
console.log(sumOfN(n));