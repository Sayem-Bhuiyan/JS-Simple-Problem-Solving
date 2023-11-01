//convert gems to daimond using function 

function gemsToDaimond(a, b, c){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
        return 'Please provide me a valid input';
    }
    else if (a < 0 || b < 0 || c < 0){
        return "Please provide me all postive numbers";
    }
    else if ( a%1 !== 0 || b%1 !== 0 || c%1 !== 0){
        return 'Please provide me all Integer number';
    }
    else {
        const friend1 = 21;
        const friend2 = 32;
        const friend3 = 43;
        
        let totalDaimond = (a * friend1) + (b * friend2) + (c * friend3);
        if ( totalDaimond > 2000){
            return totalDaimond - 2000;
        }
        else {
            return totalDaimond;
        }
    }
    
}
console.log(gemsToDaimond(1, 5, 1))