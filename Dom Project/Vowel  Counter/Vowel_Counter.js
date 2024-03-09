{
    
    const input = document.getElementById("inputFill");
    const p = document.getElementById("count");
    const p2 = document.getElementById("Vowel");

    
    function Get_value (){
        
        let textValue = "";
        let isVowel = "";
        let Count = 0 ;
        let Vowel = ['a','e','i','o','u'];
        textValue = input.value;
        
        let SplitVal = textValue.toLowerCase().trim().split("");

        for (const splitr of SplitVal) {
            let i = 0;
            for (const iterator of Vowel) {
                if(iterator == splitr){
                    isVowel += splitr;
                    Count += 1;
                }
            }
        }
        // for (let index = 0; index < isVowel.length; index++) {
        // if(isVowel[index] === isVowel[index++]){
        //     // isVowel = isVowel[index]
        //     Count -= 1;
        // }
        // }
        p2.style.color = "#fff";
        p.style.color = "#6c3df9";
        p.style.fontWeight = '600'
        p2.style.transition = 0.5+"s"
        p.style.transition = 0.5+"s"
        if(textValue == ""){
            isVowel = "No Text Enter"
        }else{
            p2.innerHTML = isVowel.split("");
        }

        p.innerHTML = Count ;
    }
}


// let Vowel = ['a','e','i','o','u'];
    // let textValue = "Hello world this is javascript";
    // let VowelCount = 0 ;
    // let isVowel = "";
    // console.log(Vowel );
    // console.log(textValue);
    // let y = textValue.toLowerCase().trim().split("");
    // for (const i of y) {
    //     for (const iterator of Vowel) {
    //         if(iterator == i){
    //             isVowel += i;
    //             VowelCount += 1;
    //         }
    //     }
    // }
    // console.log(isVowel);
    // for (let index = 0; index < isVowel.length; index++) {
    //     if(isVowel[index] === isVowel[index++]){
    //         // isVowel = isVowel[index]
    //         VowelCount -= 1;
    //     }
    // }
    // console.log(isVowel);
    // console.log(VowelCount);