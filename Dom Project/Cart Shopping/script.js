"use strict";

const item_wrap = document.getElementById('item_wrap');
const listCart = document.querySelector(".listCart");
const icon_cart = document.querySelector(".icon-cart span")

let ProductsData = [];
let cart = [];
//  getProductsData
const  getProductsData =() => {
    fetch("./data/products.json")
    .then(Response => Response.json())
    .then((Data)=>{
        ProductsData = Data
        Show_Item_In_HTML();
    })
    .catch(()=>{
        Error =  new Error("Data Was Not Show")
        return alert("Fetch URL is Not Working");
    })
}

getProductsData();

function Show_Item_In_HTML () {
    ProductsData.forEach((item,ind)=>{
        let newItem = document.createElement('div');
        newItem.classList.add("item")
        newItem.dataset.id = item.id;
        newItem.innerHTML = `
                <img src="${item.image}" alt="">
                <h2>${item.name}</h2>
                <div class="price"> $ ${item.price}</div>
                <button class="addCart">Add To Cart</button>`
                item_wrap.appendChild(newItem)
            })
};

item_wrap.addEventListener('click',(even)=>{
    let targetElem = even.target;
    if(targetElem.classList.contains("addCart")){
        let productID = targetElem.parentElement.dataset.id;
        ADD_TO_CART(productID)
    }
})

function ADD_TO_CART (ID) {
    let  CartItem = cart.findIndex((data) =>data.ID == ID);
    if(cart.length <= 0){
        cart = [{
            ID : ID ,
            Qut : 1
        }]
    }else if(CartItem < 0){
        cart.push({
            ID : ID ,
            Qut : 1
        })
    }else{
        cart[CartItem].Qut = cart[CartItem].Qut + 1;
    }
    Show_Item_CART_HTML();
}




function Show_Item_CART_HTML () {
    icon_cart.innerText = cart.length;
    listCart.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach((cart)=>{
        totalQuantity = totalQuantity +  cart.ID;
        let  NewCart = document.createElement("div");
        NewCart.dataset.id = cart.ID;
        NewCart.classList.add("item");
        let positionProduct = ProductsData.findIndex((value) => value.id == cart.ID);
        let info = ProductsData[positionProduct];
        NewCart.innerHTML=`
        <div class="image">
        <img src="${info.image}">
        </div>
        <div class="name">
        ${info.name}
        </div>
        <div class="totalPrice">$ ${info.price}</div>
                <div class="quantity">
                <span class="minus"><</span>
                <span>${cart.Qut}</span>
                <span class="plus">></span>
                </div>
                `;
                listCart.appendChild(NewCart)
            })
        }
}