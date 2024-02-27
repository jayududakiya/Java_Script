/*
3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'
Uppercase(); method
*/

{
  
  function capitalizeWord (words) {

      let New_word = words.split(' ');
      
      let New_Arr = [];
      
      for(let i = 0 ; i < New_word.length ; i++ )
      {
        New_Arr.push(New_word[i].charAt(0).toUpperCase() + New_word[i].slice(1));
      }

      return New_Arr.join(' ');
      
    }

    // let  inWords  = 'hello world'; 

    console.log(capitalizeWord('hello jayan dudakiya'));
}