import "./style.css";

import { loadHomePage } from "./home.js";
import { loadMenu } from "./menu";
import { loadContact } from "./contact.js";


console.log("We are serving");


// Clears out the old section before loading a new one
function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}


function setNav() {
  const homeBtn = document.querySelector("#homeBtn");
  const menuBtn = document.querySelector("#menuBtn");
  const contactBtn = document.querySelector("#contactBtn");

  homeBtn.addEventListener("click", clearContent, loadHomePage);
  menuBtn.addEventListener("click", clearContent, loadMenu);
  contactBtn.addEventListener("click", clearContent, loadContact);
}

loadHomePage();
setNav()
