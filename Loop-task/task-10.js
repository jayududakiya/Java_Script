{
    console.log("Print (A-a TO Z-z) is are :");

    let a = 0;
    for(let i = 65; i <= 90; i++){
        a++;
        console.log(`${String.fromCharCode(i)} - ${String.fromCharCode(96+a)}`);
    }

}