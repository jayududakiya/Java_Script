  /*
4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
split() method 
*/

{

  function LongestWord (words){

    let New_word = words.split(' ');
    let wordLength = [];
  
    for(let i = 0 ; i < New_word.length ; i++)
    {
      wordLength.push(New_word[i].slice(0).length);
    }

    // let total = Math.max.apply(null,wordLength);
  
    let findInd = New_word.findIndex((val)=>{
      return (Math.max.apply(null,wordLength) === val.length);
    });

    return New_word[findInd];

  }
  
  let InWord = 'Web Development Tutorial' ;
  console.log(LongestWord(InWord));
}