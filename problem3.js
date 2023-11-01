// take a number and 
// 1. multipy by 3
// 2. add 10
// 3. divided by 2
// 4. substruct 4
// 5. retrun the number

function mindGame(x){
    if(typeof x !== 'number'){
        return 'Please enter a valid number (Integer)';
    }
    else{
        if (x > 0){
            const result = (((x * 3) + 10)/2) - 5;
            return result;
        }
        else {
            return 'Please input a positive number';
        }
    } 
}
const output = mindGame(5);
console.log(output);

// output : 7.5