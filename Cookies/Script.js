// Show Cookies in Console / Application 

document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "item=cars,bikes,expires=Mon, 06 April 2024 12:00 UTC"
// change Cookies 
document.cookie = "name=Ohio; SameSite=None; Secure";

let  ShowCookies = document.cookie;

console.log(ShowCookies);