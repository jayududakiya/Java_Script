
{
    
    // array destructuring
    
    // let [fruits1 ,fruits2 , fruits3] = ["apple","mango","watermelon","orange"];

    // const fruits = ["apple","mango","watermelon","orange","banana","kiwi","dragon fruit"];

    // let [fruits1 ,fruits2 , fruits3] = fruits;
    
    // fruits1 = 'Banana' // change value ;
    
    // console.log(fruits1);
    
    
    
    // let [fruits1 ,fruits2 , fruits3 ,...restFru] = fruits;

    // let NewArray = restFru; // this is give new array 

    // console.log(NewArray);
    


    // How we skip value  in destructuring

    const fruits = ["apple","mango","watermelon","orange","banana","kiwi","dragon fruit"];

    let [,f1, ,f2, fruits3] = fruits; // in this we skip "watermelon" for fruits2

    console.log(fruits);
    console.log(f1);
    console.log(f2);
    console.log(fruits3);

}


{
    // Direct Array Destructing 
    // Array To Array 
    
    let [minutes , hours , secondes] = [0,0,0];

    for (let index = 1; index <= 3; index++) {
        minutes++;
        console.log("this is min",minutes);
        console.log("this is hor",hours);
        // console.log(index);
    }
}