// make a function which will give you the output is a input is Integer or not 
// return output in bolean type
// you have to return true when it's a full number

function isInteger(inupt){
    if(typeof inupt !== 'number'){
        return 'Please provide a number';
    }
    else {
        if(input % 1 === 0){
            return true;
        }
        else {
            return false;
        }
    }
}

const input =2;
const output = isInteger(input);
console.log(output);


// output: 2