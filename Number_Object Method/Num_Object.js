// Converting Variable to Numbers

/*

Number() Returns a number converted from argument.
parseFloat() Parse its argument and returns a floating point number 
parseInt() Parse its argument and returns a whole number

*/
/* Number Object Method */

/*

Number.isInteger() Returns true if the argument is an integer
Number.isSafeInteger() Returns true if the argument is a safe integer
Number.parseFloat() Convert a string to a number
Number.parseInt() Convert a string to a whole number

*/

{
  document.write("<hr>");
  document.write(`This Number() method <br>`);

  let num1 = Number("10"); // this convert in number

  let number = Number(num1);
  document.write(num1 + 10);
  document.write("<br>");
  document.write(typeof num1);
  document.write("<br>");
  document.write("<br>");

  let num2 = Number("10.10342942"); // this convert in number

  number = Number(num2);
  document.write(num2 + 10);
  document.write("<br>");
  document.write(typeof num2);
  document.write("<br>");
  document.write("<br>");

  // boolean value as it is

  let num3 = false;
  document.write(num3);
  document.write("<br>");
  document.write(typeof num3);
  document.write("<br>");
  document.write("<br>");

  num3 = true;
  document.write(num3);
  document.write("<br>");
  document.write(typeof num3);
  document.write("<br>");
  document.write("<br>");

  // boolean into number

  let num4 = false; // this convert in number

  number = Number(num4);
  document.write(number);
  document.write("<br>");
  document.write(typeof num4);
  document.write("<br>");
  document.write("<br>");

  num4 = true; // this convert in number

  number = Number(num4);
  document.write(number);
  document.write("<br>");
  document.write(typeof num4);
  document.write("<br>");
  document.write("<br>");

  let num5 = "hello";
  document.write(num5);
  document.write("<br>");
  document.write(typeof num5);
  document.write("<br>");
  document.write("<br>");

  number = Number(num5); // this convert in number type only but value is not show console
  document.write(number);
  document.write("<br>");
  document.write(typeof number);
  document.write("<br>");
  document.write("<br>");

  let num6 = "10 10";
  document.write(num6);
  document.write("<br>");
  document.write(typeof num6);
  document.write("<br>");
  document.write("<br>");

  number = Number(num6); // this convert in number type only but value is not show console
  document.write(number);
  document.write("<br>");
  document.write(typeof number);
  document.write("<br>");
  document.write("<br>");
}

{
  document.write("<hr>");
  document.write(`This parseFloat() method <br>`);

  let pf1 = parseFloat("10");

  document.write(pf1);
  document.write("<br>");
  document.write(typeof pf1);
  document.write("<br>");
  document.write("<br>");

  let pf2 = parseFloat("10.334545454545");

  document.write(pf2);
  document.write("<br>");
  document.write(typeof pf2);
  document.write("<br>");
  document.write("<br>");

  let pf3 = parseFloat("10 20 30"); // this is only print first value

  document.write(pf3);
  document.write("<br>");
  document.write(typeof pf3);
  document.write("<br>");
  document.write("<br>");

  let pf4 = parseFloat("24.44 years");

  document.write(pf4);
  document.write("<br>");
  document.write(typeof pf4);
  document.write("<br>");
  document.write("<br>");

  let pf5 = parseFloat("years 24"); // but same as this is not print word in console

  document.write(pf5);
  document.write("<br>");
  document.write(typeof pf5);
  document.write("<br>");
  document.write("<br>");
}

{
  document.write("<hr>");
  document.write(`This parseInt() method <br>`);

  let pI1 = parseInt("10.35343");

  document.write(pI1);
  document.write("<br>");
  document.write(typeof pI1);
  document.write("<br>");
  document.write("<br>");

  let pI2 = parseInt("-10.334545454545");

  document.write(pI2);
  document.write("<br>");
  document.write(typeof pI2);
  document.write("<br>");
  document.write("<br>");

  let pI3 = parseInt("-36 -20 30"); // this is only print first value

  document.write(pI3);
  document.write("<br>");
  document.write(typeof pI3);
  document.write("<br>");
  document.write("<br>");

  let pI4 = parseInt("24.55 years");

  document.write(pI4);
  document.write("<br>");
  document.write(typeof pI4);
  document.write("<br>");
  document.write("<br>");

  let pI5 = parseInt("years 24"); // but same as this is not print word in console

  document.write(pI5);
  document.write("<br>");
  document.write(typeof pI5);
  document.write("<br>");
  document.write("<br>");
}

{
  document.write("<hr>");
  document.write(`This  Number.isFinite() method <br>`);

  let method = 10.422;
  // method ="100";
  document.write("<br>")  
  document.write(method);
  document.write("<br>");
  document.write("<br>")  
  let convin = Number.isFinite(method);

  document.write(`this  isFinite() method output : ${convin} <br>`);
}

{
  document.write("<hr>");
  document.write(`This  Number.isInteger() method <br>`);

  let method = 10.32;
  // method =100;
  document.write("<br>");
  document.write(method);
  document.write("<br>");
  document.write("<br>");
  document.write(typeof method);
  document.write("<br>");
  document.write("<br>");
  let convin = Number.isInteger(method);

  document.write(`this  isInteger() method output : ${convin} <br>`);
}

{
  document.write("<hr>");
  document.write(`This  Number.parseFloat() method <br>`);

  let method4 = Number.parseFloat("10"); // 10
  let method5 = Number.parseFloat("10.33"); // 10.33
  let method6 = Number.parseFloat("10 20 30"); // 10
  let method7 = Number.parseFloat("10 years"); // 10
  let method8 = Number.parseFloat("years 10"); // NaN

  document.write("<br>");
  document.write(method8);
  document.write("<br>");
  document.write("<br>");
  document.write(typeof method8);

  document.write("<hr>");
  document.write(`This  Number.parseInt() method <br>`);

  let method9 = Number.parseInt("-10"); // -10
  let method10 = Number.parseInt("-10.33"); // -10
  let method11 = Number.parseInt("10"); // 10
  let method12 = Number.parseInt("10.33"); //10
  let method13 = Number.parseInt("10 6"); // 10
  let method14 = Number.parseInt("10 years"); // 10
  let method15 = Number.parseInt("years 10"); // NaN

  document.write("<br>");
  document.write(method15);
  document.write("<br>");
  document.write("<br>");
  document.write(typeof method14);
}
