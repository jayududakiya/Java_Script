{
/*

    1. alert() - shows a message.

    2. prompt() - shows a message, input text. it returns the text on ok or,  if cancel button or Esc is clicked, Null.

    3. confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false for cancel/Esc.

*/ 

    {
        // let X = prompt("Enter value Here : " ,);
        // document.write(`an value of X is ${X} , Using Prompt() Method `);
    }

    {
        let X = alert(`Hello world Alert`);
    }
    
    {
        let z = confirm("this is confirm its return only boolean value \n if you press 'OK' than it's : true or if you press 'Cancel' than it's false ");
        if(z == 1){
            alert(`Welcome You are Log In`);
        }else{
            document.write(`Sorry You are Log Out`);
        }
    }
}