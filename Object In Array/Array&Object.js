{
    let OneDirection = [
        {
            Member : 1,
            Name : "Harry Styles",
            DOB : "February 1, 1994" ,
            Gender : "Male",
            Country : "England"
        },
        {
            Member : 2,
            Name : "Zayn Malik",
            DOB : "January 12, 1993" ,
            Gender : "Male",
            Country : "England"
        },
        {
            Member : 3,
            Name : "Liam Payne",
            DOB : "August 29, 1993" ,
            Gender : "Male",
            Country : "England"
        },
        {
            Member : 4,
            Name : "Louis Tomlinson",
            DOB : "December 24, 1991" ,
            Gender : "Male",
            Country : "Russia"
        },
        {
                Member : 5,
                Name : "Louis petrason",
                DOB : "December 21, 1989" ,
                Gender : "Male",
                Country : "England"
        }
    ];

    console.log(OneDirection);

    // Destructing

    let [{Member : m1},{Name : n},{DOB : d},{Name : n1 , Country : C}] = OneDirection;

    console.log(m1);
    console.log(n);
    console.log(d);
    console.log(n1 , ":",C);
    // console.log();
    // for (const user of OneDirection) {
    //     console.log(user.Member);
    // }    
}


{
    // let Member = {
    //     Member : 5,
    //     Name : "Louis petrason",
    //     DOB : "December 24, 1991" ,
    //     Gender : "Male",
    //     Country : "England"
    // }

    // console.log(Member);

    // for (const key in Member) {
    //     console.log(Member[key]);
    // }
}