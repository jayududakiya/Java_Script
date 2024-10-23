
//======================= > Closures function Creating 

   function Closures_Addition (a) {
     return function (b) {
        return function (c) {
            return a+b+c
        }
     }
   }

//======================= > function calling with Closures Method 

   let res = Closures_Addition(10)
   let res01 = res(2)
   let res02 = res01(3)

   console.log(res02);

//======================== > function calling with Currying Method 

   let Closures_Total = Closures_Addition(10)(2)(3)
   console.log(Closures_Total);


//======================= > Currying Function Creating 

const Currying_Addition = (a) => (b) => (c) => {
  return a + b + c;
};

//======================== > function calling with Currying Method 

let Currying_Total = Currying_Addition(10)(5)(50);
console.log(Currying_Total);
