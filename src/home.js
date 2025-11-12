 export function loadHomePage() {
    const content = document.querySelector("#content");

   const homeDiv = document.createElement("div");
   const heading = document.createElement("h1")
   const para = document.createElement("p");

   headline.textContent = "Welcome to Elle's Kitchen!";
   description.textContent = "The best meals, freshly cooked with love 💖";

   homeDiv.appendChild(heading);
   homeDiv.appendChild(para);
   content.appendChild(homeDiv);
}