import { DataArray, OrderMenu } from "./data.js";

const Menu = document.getElementById("Menu");
const Order = document.getElementById("order");

document.addEventListener("click", (e) => {
  if (e.target.dataset.plus) {
    let selectedItem = DataArray.filter(
      (x) => e.target.dataset.plus === x.id
    )[0];
    OrderMenu.unshift(selectedItem);
    console.log(OrderMenu);
    Order.innerHTML = Orderhtml();
  }
});
function menuHtml() {
  return DataArray.map((item) => {
    return `
        <div class="menu-item">
          <div class="icon">
            ${item.emoji}
          </div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <p>$${item.price}</p>
          </div>
          <button class="add-to-cart" data-plus=${item.id}>+</button>
        </div>
      `;
  }).join("");
}

Menu.innerHTML = menuHtml();

function Orderhtml() {
  return OrderMenu.map((item) => {
    return `
     <div class="menu-item">
      <div class="icon">
        ${item.emoji}
      </div>
      <div>
        <h3>${item.name}</h3>
        <p>${item.ingredients}</p>
        <p>$${item.price}</p>
      </div>
      <button class="add-to-cart" data-remove=${item.id}>Remove</button>
    </div>
  `;
  }).join("");
}
