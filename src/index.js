import "./style.css";
import images from "./images/image.png";


import { loadHomePage } from "./home.js";
import { loadMenu } from "./menu";
import { loadContact } from "./contact.js";


console.log("We are serving");


// Clears out the old section before loading a new one
function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}


 export function setNav() {
  const homeBtn = document.querySelector("#home"); 
  const menuBtn = document.querySelector("#menu"); 
  const contactBtn = document.querySelector("#contact"); 

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHomePage();
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}


loadHomePage();
setNav()
