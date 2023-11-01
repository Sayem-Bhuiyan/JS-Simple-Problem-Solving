/*
1. write a function called isLGSeven()
2. input a number as a parameter
3. make difference between input and 7
4. if the the number is smaller than make the number double
*/ 

function isLGSeven(x){
    if (typeof x !== 'number'){
        return 'Please enter a valid number';
    }
    else {
        const differ = x - 7;
        if ( differ < 7){
            return differ;
        }
        else if(differ > 7){
            return x * 2;
        }
    }
}

const result = isLGSeven(-15);
console.log(result);