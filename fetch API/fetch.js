const URL = "https://jsonplaceholder.typicode.com/posts";



fetch(URL)
    .then((response)=>
    {
        if(response.ok){
            return response.json();
        }else{
            throw new Error ("Smoothie want Wrong !!!")
        }
    })
    .then((data)=>{
        const id = data[4].id;
        console.log(data[4].title);
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        return fetch(URL2);
    })
    .then((newResponse)=>{
        return newResponse.json();
    })
    .then((newData)=>{
        console.log(newData);
        const Jdeta = JSON.stringify(newData);
        console.log(Jdeta);
    }).catch((error)=>{
        console.log("inside catch");
        console.log(error);
    })