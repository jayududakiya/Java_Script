{
    function Check_Marks (Marks) {
        if(Marks > 33)
        {
            console.log(`Student is Pass : ${Marks}`);
        }
        else{
            console.log(`Student is NOT Pass : ${Marks}`);
        }
    }

    Check_Marks(Math.floor(prompt("Enter Student Marks :",)));
}