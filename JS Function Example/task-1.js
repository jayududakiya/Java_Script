{
// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451
// .reverse(); method


let Numbers = 7651;
console.log(Numbers);

function myReverse (Num) {
    let reverseNum;
    return reverseNum = Number(Numbers.toString().split('').reverse().join(''));
}

console.log(myReverse(Numbers));
}