{
    let i = 0;
    let alfa = 65;
    console.log(`Print (A,c,E,g,I)`);
    do{
        if(i%2==0){
            console.log(String.fromCharCode(alfa));
        }
        else{
            console.log(String.fromCharCode(alfa+32));
        }
        i++;
        alfa+=2;
    }while(i<=5);
 }