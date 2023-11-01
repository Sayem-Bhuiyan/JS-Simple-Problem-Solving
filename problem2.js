/*
1. write a function named isJavaScriptFile.
2. take parameter as a string like file name
3. check the file is Javascript file or else
4. return output in bolean type
*/ 

function isJavaScriptFile(fileName){
    if(typeof fileName !== 'string'){
        return 'Please provide a valid filename (string)';
    }
    else {
        // making the string to lowercase
        if(fileName.toLowerCase().endsWith('.js') === true){
            return true;
        }
        else{
            return false;
        }
    }
}

const fileName = 'problem2.Js';
const isJsFile = isJavaScriptFile(fileName);
console.log(isJsFile);

// ------------ Ouptut --------
// ture