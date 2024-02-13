/* Javascript Type Conversion */

// there are three type of Conversion 
// 1 . Number()
// 2 . String()
// 3 . Boolean()

// let x;
// console.log(x);  /*"undefined"*/
// console.log(typeof(x));


// const x; /* SyntaxError: Missing initializer in const declaration */


// console.log(x); /* ReferenceError */
// const x = 3;

// console.log(y); /* ReferenceError */
// let y = 3;

{
    let x = false;
    
    let y = (Number(x)); 
    let z = (String(x)); 
    let a = (Boolean(x));
    console.log(x);
    console.log(z);
    console.log(a);
    console.log(typeof(y));
    console.log(typeof(z));
    console.log(typeof(a));
}
  
{
    let x = true;
    console.log(""); // empty line 
    
    console.log(Number(x)); // 1 
    console.log(String(x)); // true 
    console.log(Boolean(x)); // true 
}
  
  {
    let x = 0;
    console.log(""); // empty line 
    console.log(Number(x)); // 0 is number 
    // console.log(typeof(x)); // 0 is number 
    console.log(String(x)); // 0 in string
    // console.log(typeof(x)); // 0 is number 
    console.log(Boolean(x)); // false is == 0
  }
  
  {
    let x = 1;
    console.log(""); // empty line 
    console.log(Number(x));  // 1 is number  
    console.log(String(x));  // 1 in staring
    console.log(Boolean(x)); // true is == 1 
  }
  
  {
    console.log(""); // empty line 
    let x = "000";
    let y = ""; 
    
    console.log(Number(x)); // 0 ==  because  it's number 
    console.log(String(x)); // 000  == because it's string 
    
    /* true == because variable is not empty
    if variable "x" is empty than boolean show false 
    value like variable "y";*/

    console.log(Boolean(x)); 
    console.log(Boolean(y)); 
  }
  
  {
    console.log(""); // empty line 
    let x = "111";
    let y = "";
    
    console.log(Number(x)); // 111 because it's Number 
    console.log(String(x)); // 111 because it's a string 
    console.log(String(y)); // empty it's not's show anything in console   

    /* true == because variable is not empty
    if variable "x" is empty than boolean show false 
    value like variable "y";*/

    console.log(Boolean(x)); 
    console.log(Boolean(y)); 
}
  
  {
    console.log(""); // empty line 
    let x = undefined;
    
    console.log(Number(x)); // Show == NaN 
    console.log(String(x)); // Undefined 
    console.log(Boolean(x)); // false 
  }
  
  {
    console.log(""); // empty line 
    let x = NaN; // NaN is Not equals 0 it's Only Not a Number 
    
    console.log(Number(x));  //  Show == NaN 
    console.log(String(x)); // NaN
    console.log(Boolean(x)); // false 
  }
  
  {
    console.log(""); // empty line 
    let x = null; // null is equals 0 
    
    console.log(Number(x)); // null == 0 show 
    console.log(String(x)); //  null 
    console.log(Boolean(x)); // false
  }
  
  {
    console.log(""); // empty line 
    let x = Infinity;
    
    console.log(Number(x)); // it's shoe  : Infinity 
    console.log(String(x)); // it's show  : Infinity 
    console.log(Boolean(x)); // it's true :  because infinity number shod be anything number 
  }
  
  {
    console.log(""); // empty line 
    let x = -Infinity;
    
    console.log(Number(x)); //it's shoe  : -Infinity 
    console.log(String(x)); // it's shoe  : -Infinity 
    console.log(Boolean(x)); // it's true :  because -infinity number shod be anything number  
  }
  
  {
    console.log(""); // empty line 
    let x = "";
    
    console.log(Number(x)); // 0 because  of empty string 
    console.log(String(x)); // only show space " " ;
    console.log(Boolean(x)); // false 
  }
  
  {
    console.log(""); // empty line 
    let x = "Hello";
    
    console.log(Number(x)); // Show : NaN 
    console.log(String(x)); // Show : Hello 
    console.log(Boolean(x)); // true 
  }
  
  {
    console.log(""); // empty line 
    let x = []; // empty array 
    
    console.log(Number(x)); // 0
    console.log(String(x)); // only show space " " ;
    console.log(Boolean(x)); // false 
  }
  
  {
    console.log(""); // empty line 
    let x = ["Hello"];
    
    console.log(Number(x)); // show  : NaN
    console.log(String(x)); // Show : Hello 
    console.log(Boolean(x)); // true 
  }
  
  {
    console.log(""); // empty line 
    let x = [10, 50 , 30];
    
    console.log(x); // this is show a array in console 
    console.log(Number(x)); // but this is not show array and show NaN
    console.log(String(x)); // this is print array same 
    console.log(Boolean(x)); // true 
  }
  
  {
    console.log(""); // empty line 
    let x = [100];
    
    console.log(Number(x)); // this is show 100 
    console.log(String(x)); // this is show string 
    console.log(Boolean(x)); // this is show true 
  }
  
  {
    console.log(""); // empty line 
    let x = ["Hello" , "Hi"];
    
    console.log(Number(x)); // NaN
    console.log(String(x)); // this is show Hello & Hi  
    console.log(Boolean(x)); // true 
  }

  {
    console.log(""); // empty line 
    let x = function(){};

    console.log(Number(x)); // NaN
    console.log(String(x)); //  function(){};
    console.log(Boolean(x)); // true 

  }
  
  {
    console.log(""); // empty line 
    let z = {
      x : "hello",
      y: function x(){
        return 10
      },
    }
    
    console.log(z.x);
    console.log(z.y);
    console.log(Number(z)); // NaN
    console.log(String(z.y)); // function x(){ return 10 }
    console.log(Boolean(z)); // true
  }
  
  {
    console.log(""); // empty line 
    let x = {}; // this is object [this first value is key 
                                  // & this seconde value is value ]
    
    console.log(Number(x)); // NaN
    console.log(String(x)); // [object , Object ]
    console.log(Boolean(x)); // true because object is not empty there is [object , Object ]
  }