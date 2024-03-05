// {
//     let a = 100 , b = 20;
//     // let c;
//     try {
//         console.log(a/b);
//         console.log(c);
//         console.log('hello work is done');
//     } catch (error) {
//         // error = 'c is not declare in your code ';
//         console.log('error is catch now');
//         console.log('Your Error Massage is : ',error);
//     }finally{
//         console.log('work is not done but code is runig');
//     }
// }
{
    //  let check = confirm('hello world ');
     let check = prompt(`Enter You name : `,'');
     
     try{
        if (check != '') {
            document.write('Your are logIn sussesfull');
            document.write('<br>');
        }else{
            throw new Error ();
        }
    }catch(error){
        error = 'Wrong Id Or Password';
        document.write("Your are logOut" , error);
        document.write('<br>');
    }
    finally{
        if (check != '') {
            document.write('Your are Account is created sussesfull');
            document.write('<br>');
        }else{
            document.write('Your are Account is NOT created');
            document.write('<br>');
        }
     }
}