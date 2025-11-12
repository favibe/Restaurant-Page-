const menu = [];

class Menu {
    constructor(name, description, price, img) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
    }
};

menu.push (
    new Menu("Margherita Pizza", "Classic pizza with tomato, mozzarella, and basil.", "$12", "images/image.png"),
    new Menu("Pasta Carbonara", "Creamy pasta with pancetta and parmesan cheese.", "$14", "images/image.png"),
    new Menu("Tiramisu", "Italian coffee-flavored dessert with mascarpone.", "$8", "images/image.png"),
);

//function to loadmenu
 export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    menu.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");

        const image = document.createElement("img");
        image.src = item.img;
        image.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("span");
        price.textContent = item.price;
        

        card.append(image, name, description, price);
        menuContainer.appendChild(card);
    });

    content.appendChild(menuContainer);

}