// basic function 

// function  lineOne (){
//     console.log("This is Function One ");
// }

// function lineTwo () {
//     console.log("This is Function Two");
//     // console.log("This is Function after inset FunOne Two");
// }


// lineOne(); // call function 
// lineTwo(); // call function 



// callback One Function In Other Function with Try


function  lineOne (callback){
    console.log("This is Function One ");
    callback; 
}

function lineTwo () {
    console.log("This is Function Two");
    // console.log("This is Function after inset FunOne Two");
}


lineOne(lineOne()); // call function 


/*
Output 
> This is Function One 
> This is Function One 
*/


// precise OF call back Simple 

// function  lineOne (callback){
//     console.log("This is Function One ");
//     callback(); 
// }

// function lineTwo () {
//     // console.log("This is Function Two");
//     console.log("This is Function after inset FunOne Two");
// }


// lineOne(lineTwo); // call function 



// with passing perms 

// function GetNum (Num1,Num2,callback,CallSeconde){
//     console.log(`Number 1 : ${Num1} \nNumber 2 : ${Num2}`);
//     callback(Num1 , Num2);
//     CallSeconde(Num1 , Num2);
// }

// function AddNum(N1,N2){
//     return console.log(N1 + N2);
// }

// function SumNum(N1,N2){
//     return console.log(N1 * N2);
// }

// GetNum(7,2,AddNum,SumNum)