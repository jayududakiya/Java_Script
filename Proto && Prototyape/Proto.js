// student.prototype.Name = "J";
// student.prototype.rollnumber = 21;
// student.prototype.class = 10;
// student.about = function () {
//     console.log(`Hello MY name is ${this.Name} And My RollNumber is ${this.rollnumber} i am From ${this.class} Class`);
// }

// function student () {
//     student.about.bind(student.prototype);
// }

// student();

const StudentData = {
  About() {
    return `Hello my name is : ${this.StuName}\nMy Roll Number is : ${this.RollNumber}\nI am From : ${this.Class} Class`;
  },
  getRank() {
    return `My Rank is ${this.Rank}`;
  }
};


function Student(name, RollNum, Cls) {
  const Sut = Object.create(StudentData); // this line is call ProTo
  Sut.StuName = name;
  Sut.RollNumber = RollNum;
  Sut.Class = Cls;
  return Sut;
}

const Student1 = Student("Rohit", 34, 12);
Student1.Marks = `Marks is : ${78} %`;

console.log(Student1.About());
console.log(Student1.getRank());
console.log(Student1.Marks);

const Student2 = Student("J", 21, 11);
Student2.Rank = "S";

console.log(Student2.About());
console.log(Student2.getRank());


// const NewStu = Object.assign(Student1,...Student2);
const NewStu = Object.assign(Student1,Student2);
// console.log(NewStu.About.bind(Student1)());

console.log(NewStu);