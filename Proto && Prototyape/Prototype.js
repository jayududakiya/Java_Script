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
 


  
  
  function Student(name, RollNum, Cls) {
    const Sut = Object.create(Student.prototype); // this line is call ProTo
    Sut.StuName = name;
    Sut.RollNumber = RollNum;
    Sut.Class = Cls;
    return Sut;
  }

  Student.prototype = {
    About() {
      return `Hello my Name is : ${this.StuName}\nMy Roll Number is : ${this.RollNumber}\nI am From : ${this.Class} Class`;
    },
    getRank() {
      return `My Rank is ${this.Rank}`;
    },
    UserName(){
        return `User Name Is : ${this.StuName}${this.Rank.charCodeAt(0)}@${this.RollNumber}`
    }
  };
  
  const Student1 = Student("herry", 34, 12);
  Student1.Marks = `Marks is : ${78} %`;
  Student1.Rank = "B";
  
  console.log(Student1.About());
  console.log(Student1.getRank());
  console.log(Student1.UserName());
  console.log(Student1.Marks);
  
    const Student2 = Student("J", 21, 11);
    Student2.Marks = `Marks is : ${88} %`;
    Student2.Rank = "S";

  console.log(Student2.About());
  console.log(Student2.getRank());
  console.log(Student2.UserName());
  console.log(Student2.Marks);
  
