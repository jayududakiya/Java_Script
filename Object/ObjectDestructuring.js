{

const key1 = "objkey1";
const key2 = "objkey2"; 
const key3 = "objkey3"; 

const value1 = "myvalue1";
const value2 = "myvalue2";
const value3 = "myvalue3";


const obj = {
    [key3] : value3
}

obj[key1] = value1
obj[key2] = value2

console.log(obj.objkey1);
}

{
    const band = {
        bandName : "One direction",
        Member1 : "Harry Style",
        Member2 : "Zayn",
        Member3 : "Niall Horan",
        Member4 : "Liam Payne"
    }


    // object destructuring

    // This is First method Sem as KeyName 
    // const {bandName , Member1 , Member2 } = band ;

    // console.log(bandName); // one direction

    // This is Seconde method with variable Name 
    // const {bandName:name , Member1:M1 , Member2:m2 } = band ;

    // console.log(name); // one direction
    // console.log(M1); // Harry Style

    // This is Third Method with rest permeates
    const {bandName:name , Member1:M1 , Member2:m2 , ...restval } = band ;

    console.log(name); // one direction
    console.log(M1); // Harry Style
    console.log(restval); // return a object with rest key value peras

    //us as object 

    console.log(restval.Member4);
}
