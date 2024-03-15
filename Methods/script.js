// This Key Word     

// const person = {
//     fName : "jackie",
//     age : 22,
//     city : "Japan",
//     Data : function (){
//         console.log(`Hii My Name Is ${this.fName} and My age is ${this.age} i am From ${this.city}`);
//     }
// }

// // with inner function 
// person.Data();


// function GetData () {
//     console.log(`My Name Is ${this.Name} and My Age is ${this.Age}`);
// }

// const User1 = {
//     Name : "Jack",
//     Age : 21,
//     Details : GetData
// }

// const User2 = {
//     Name : "herray",
//     Age : 22,
//     Details : GetData
// }

// // this key word use of outsider function of object 

// User1.Details();
// User2.Details();


// Call method 


const student = {
    firstName: 'Ram',
    class: 10,
    About : function(Rank){
        console.log(`Name is : ${this.firstName}\nClass is : ${this.class}\nRank is ${Rank}`);
    }
};

const student1 = {
    firstName: 'Hanuman',
    class: 11
};

const student2 = {
    firstName: 'Shiva',
    class: 12
};

student.About("A");

//print data from one Object To Other 

student.About.call(student1,"A++") // for Student 1 from Student obj
student.About.call(student2,"infinity") // for Student 2 from Student obj


// function About (Country="Enter Country"){
//     console.log(`Hii My Name Is "${this.Name}" and My age is\n "${this.Age}" i am From\n "${this.City}" \n My Country is "${Country}"`);
// }

// const person = {
//     Name : "jackie",
//     Age : 22,
//     City : "Tokyo",
// }

// const User1 = {
//     Name : "Jack",
//     Age : 21,
//     City : "Surat"
// }

// About.call(person,"japan");

function About (){
    console.log(`Hii My Name Is "${this.Name}" and My age is\n "${this.Age}" i am From\n "${this.City}"`);
}

const person = {
    Name : "jackie",
    Age : 22,
    City : "Tokyo",
}

const User1 = {
    Name : "Jack",
    Age : 21,
    City : "Surat"
}

About.call(person);

