// find the number of negative value from an array

function findingBadData(arr){
    if(!Array.isArray(arr)){
        return 'Please enter an arry of number';
    }
    else {
        let totalBadData = 0;
        for ( let i = 0; i < arr.length; i++){
            if ( typeof arr[i] !== 'number'){
                return 'Please provide me an arry of number';
            }
            else {
                if ( arr[i] < 0){
                    totalBadData++;
                } 
            }  
        }

        // for of loop 
        // for( let item of arr){
        //     if ( item < 0){
        //         totalBadData++;
        //     }
        // }
        return totalBadData;
        }
}

const numbers = [2, -98, 34, -4, 34, 67, -23, -6, 85, -89];
console.log(findingBadData(numbers));
