"use strict"
{
        // let Cash = 360;
        // console.log(Cash_count(350));

        function Cash_count (Cash){
        let Money = [2000,500,200,100,50,20,10];
        let remind = 0;
        for(let i = 0 ; i <= Money.length-1 ; i++ ){

            remind = Cash / Money[i];

            if(remind != 0){
                console.log(parseInt(remind),"your Money is ",Money[i]);
                Cash = Cash % Money[i];
            }
            // else{
            //  console.log(`NOT a Valid Amount`);
            // }
        } 
    }

    console.log(Cash_count(350));
    // let N = Cash_count(350);
    // let N = Math.floor(Cash_count(350));
    // let N = toString(Cash_count(350));
    // console.log(N);
    
}