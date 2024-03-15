
// const profile = {
//   firstName: "Harry",
//   lastName: "Doe",
//   age: 50,
//   email: "johndoe@gmail.com",
//   hobbies : ['music', 'gaming' ,'editing','movies']
// };

// profile.address =
// {
//   No : 45 ,
//   street : 'shyamdham v-3 Nana  varachha ' ,
//   city : 'Surat',
//   state : ' Gujarat '
// }

// profile.age = 44;

// delete profile.age;
// // delete profile['email'];

// profile.Mob_Number = 7545023323;

// let logs = profile.address['street'];

// document.write(profile['age']);
// document.write('<br>',profile.email);
// document.write('<br>',logs);


// console.log(` ${profile.address} `); // not print 
// console.log(profile);
// console.log(profile['address']['city'],',',profile['address']['state']); // print 
// console.log(profile['hobbies']['0']);


//  call 

// let userName = {
//   Print : function ()
//   {
//      let  x =  this.firstName + this.lastName ;
//      return "@" + x + x.length + (x.charCodeAt(2)/x.length).toFixed();
//   }
// };

// console.log(userName.Print.call(profile));

// bind 

let parson1 = {
  Fname : "Honey",
  Lname : "singh",
};

let parson2 = {
  Fname : "Billie",
  Lname : "Eilish",
  Print : function (...c)
  {
    // return this.Fname + " " + this.Lname + " 🎶 "  + "is " + c[0] + " singers";
    console.log(this.Fname + " " + this.Lname + " 🎶 "  + "is " + c[0] + " singers");
  }
};

let parson = {
  Fname : "Name",
  Lname : "lastName",
  Print : function (...c)
  {
    return this.Fname + " " + this.Lname + " 🎶 " + "is " + c[1] + " singers";
  }
};
  


// console.log(parson.Print.bind(parson2)());
// console.log(parson.Print.bind(parson1)());
// console.log(parson2.Print.bind(parson1)());
let bnd = parson2.Print.bind(parson1);
bnd();


// // apply 

// country = ['Indian','USA','Rio'];

// console.log(parson.Print.apply(parson1,country));
// console.log(parson.Print.apply(parson2,country));
