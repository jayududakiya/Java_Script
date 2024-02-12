/* JavaScript Variable */

{
    // var x = 20 + 20 + "5" + 20 + 20 + 20 * 2 - 50 + "5";

    // var x1 = 20 + 20 + "5" + 20 + 20 + 20 * 2 - 50 + "5"

    // 405202040 - 50
    // 4052019905
    // console.log(x);
}


/* string with quotes */
console.log(`String with quotes`);

{
    let string1  = "He'llo"
    let string2  = 'He"llo'
    let string3  = "He\"llo"
    let string4  = 'He\'llo'
    let string5  = "He\nllo"
    let string6  = "He\t\tllo"
    
    let string7  = `'He'\n \t "llo"`
    

    console.log(string1);
    console.log(string2);
    console.log(string3);
    console.log(string4);
    console.log(string5);
    console.log(string6);

    console.log(string7);

}





console.log(`Arithmetic Operators`) ;

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/

{
    let x = 2 + 3;
    let c = 10 / 3;
    let v = 30 % 3;
    let b = 30 - 3;
    let e = 30 * 3;
    
    let a = 30;
    a++;
    let a1 = 30;
    a1--;
    let a2 = 4**2;

    console.log(x);
    console.log(c);
    console.log(v);
    console.log(b);
    console.log(e);
    console.log(a);
    console.log(a1);
    console.log(a2);

}


 console.log( `ASSIGEMENT OPERATOR` ) ;

/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/
{

    let a = 10 , b = 20  ;

    a += b;

    a -= b;
    
    a *= b;

    a /= b;

    b %= a;
    console.log(a);
    
    a %= b;
    
    console.log(b);

    a**=b;

    console.log(a);

}


console.log(`Comparison Operators`);

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.
*/

{

    let c = (0 !== 0);
    console.log(c);
    
    let x = (0 == false);
    console.log(x);

}

/*
=== (identical equal and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/

console.log(`Logical Operators`);

console.log(`&& (Logical AND)`);
/*
If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.
*/

{
    let x = false;
    let y = true;

    console.log(x && y);
    console.log(y && y);
    console.log(x && x);

    console.log(10 > 9 && 10 > 11);
}



console.log(`|| (Logical OR)`);
/*
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.
*/


{
    let x = false;
    let y = true;

    console.log(x || y);
    console.log(y || y);
    console.log(x || x);

    console.log(10 > 9 || 10 > 11);
}


console.log(`! (Logical NOT)`);
/*
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
Ex: ! (A && B) is false.
*/

{
    let x = false;
    let y = true;

    console.log(!(x || y));
    console.log(!(y || y)); 
    console.log(!(x && x));

    console.log(!(10 > 9 || 10 > 11));
}

/* Miscellaneous Operator

? ternary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y
,

*/



         

         
            