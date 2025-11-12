export function loadContact() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const info = document.createElement("p");
  info.textContent = "Call 080-RESTAURANT or visit Wuye, Abuja.";

  div.appendChild(heading);
  div.appendChild(info);
  content.appendChild(div);
}
