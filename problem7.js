function printDetails(person){
    if( typeof person !== 'object'){
        return 'Please provide me a valid object';
    }
    else {
        const name = person.name || 'nai';
        const age = person.age || 'nai';
        const email = person.email || 'nai';
        const bou = person.bou || 'nai';
        return 'amr nam '+name+ '. amr boyos '+age+'. amr email '+email+'. amr bou '+bou;
    }
}
const obj = {
    name: 'Sayem',
    age: 21,
    email: 'sayem465508@gmail.com'
}
console.log(printDetails(obj))