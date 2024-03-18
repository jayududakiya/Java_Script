
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xml = new XMLHttpRequest();


// xml.open("GET",URL);

function URLCall (){
    return xml.onload = () => {
            const Data = JSON.parse(xml.response);
            console.log(Data);

            const id = Data[3].id

            const URL2 = `${URL}/${id}`;
            const xml2 = new XMLHttpRequest();
            xml2.open("GET",URL2);

            xml2.onload = () => {
                const Data2 = JSON.parse(xml2.response);
                console.log(Data2);
            }
            xml2.send();
        }
    }
    
    URLCall();
    
//     xml.send();



    // Function To Create XMLHttpRequest();

    // function Creation (){
    //     return new XMLHttpRequest();
    // }

    // const xmls1 = Creation();

    // console.log(xmls1.readyState);

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest (Method,URL) {
    return new Promise ((resolve,reject) =>
    {
        const xmls = new XMLHttpRequest();
        xmls.open(Method,URL);
        xmls.onload = function () {
            if(xmls.status >= 200 && xmls.status <= 300){
                resolve(xmls.response);
            }else{
                reject( new Error("want Soothing Wrong"))
            }
        }
        xmls.send()
    }
)
}



sendRequest("GET",URL)
    .then((response)=>{
        const deta = JSON.parse(response);
        return deta;
    }).then((deta)=>{
        id = deta[3].id;
        const URL2 = `${URL}/${id}`;
        return sendRequest("GET",URL2)
    })
    .then((Newresponse)=>{
        const deta2 = JSON.parse(Newresponse);
        console.log(deta2);
    })
    .catch((Error)=>{
        console.log(Error)
    })