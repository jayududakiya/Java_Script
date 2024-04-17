const input = document.getElementById("input");
const submit = document.getElementById("submit-btn");
const Todolist = document.querySelector(".todo-container");

// let listText = ""

const Todo = [
    {id : 123, data : "HTML"},
    {id : 143, data : "CSS"},
    {id : 133, data : "JAVASCRIPT"},
    {id : 163, data : "JQUERY"},
    {id : 183, data : "REACT"},
    {id : 193, data : "NODE"},
    {id : 103, data : "Next.js"},
    {id : 102, data : "Node.js"}
];

if(input.value === "" || Todo !== ""){
    Todo.forEach((To)=>{
        const li = document.createElement("li");                    
        li.classList.add("list")
        li.id = To.id;
        li.innerHTML = `
        <p class="list-text">${To.data}</p>
        <button class="list-btn Done">Done</button>  
        <button class="list-btn Remove">Remove</button>
        <button class="list-btn Edit">Edit</button>
        `;
        Todolist.append(li);
    })
    console.log("Default",Todo);
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value !== ""){
        addList();
    }else{
        alert("Please Enter Some Text In Input Fild")
    }
    
})


function addList(){
    const listText = input.value;
    const RadomeID = listText.charCodeAt(2) + Math.floor(Math.random()*100);
    Todo.push({id : RadomeID, data : listText});
    
        const li = document.createElement("li");                    
        li.classList.add("list")
        li.id = RadomeID;
        li.innerHTML = `
        <p class="list-text">${listText}</p>
        <button class="list-btn Done">Done</button>  
        <button class="list-btn Remove">Remove</button>
        <button class="list-btn Edit">Edit</button>
        `;
    
    input.value = "";
    Todolist.prepend(li);
    console.log("Add",Todo);
}

Todolist.addEventListener("click",(e)=>{
    targetButton(e);
})

function targetButton (e){
    const target = e.target;
    if(target.classList.contains("Done")){
        const DoneText =  target.previousElementSibling
        DoneText.style.textDecoration = "line-through"
    }
    if(target.classList.contains("Remove")){
        const removeLi = target.parentElement;
        removeLi.remove();
        RemoveData(removeLi);
    }
    if(target.classList.contains("Edit")){
        const editText = target.parentElement.children[0].textContent;
        input.value = editText;
        const edit =  target.parentElement.children[0].parentElement;
        if(editText === input.value){
            RemoveData(edit)
        }if(editText !== input.value){
            edit.remove();
        }
    }
}


function RemoveData (removeElement){
    Todo.map((obj,ind)=>{
        if(obj.id === Number(removeElement.id)){
            // Todo.slice(ind,ind+1);
            Todo.splice(ind,ind+1);
        }
    })
    console.log("Remove",Todo);
}