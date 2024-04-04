{

    // class created 

    class person {
        constructor (name,sname){
            this.name = name,
            this.sname = sname
        }
        display = fnction () 
        {
            return "Hello " + this.name + this.sname ;
        }

        // using arrow function 
        username = function () //"@" + this.name + this.sname + "2";
        {   return "@" + this.name + this.sname + "23";}
        
    }

    let obj = new person("jone","Dove");


    console.log(obj);
    console.log(obj.display());
    console.log(obj.username());
    console.log(obj.name);
    console.log(obj.sname);
}