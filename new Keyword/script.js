function AddUser (Fname,Lname,age,email) {
    this.FirstName = Fname
    this.LastName = Lname
    this.Age = age
    this.Email = email
}


const User1 = new AddUser("Its","J",21,"it'sJ@gmail.com");


console.log(User1);





class Animal {
    constructor (Aname , age ){
        this.Name = Aname;
        this.Age = age;
    }

    Eat(){
        return `This is eat A fruits `;
    }
}


const Animal1 = new Animal("Tiger",23);

console.log(Animal1.Name);
console.log(Animal1.Age);

console.log(Animal1.Eat());