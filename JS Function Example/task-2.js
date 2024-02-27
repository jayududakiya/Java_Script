/*
2. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
.sort() method 
*/

let Instr = 'webmaster';

console.log(Instr);

function MySort (str) {
    let sortstr;
    return sortstr = str.split('').sort().join('');
}

console.log(MySort(Instr));