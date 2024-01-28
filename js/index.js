import { DataArray, OrderMenu } from "./data.js";
import { Removeitem } from "./cart.js";

const Menu = document.getElementById("Menu");
const Order = document.getElementById("order-html");

document.addEventListener("click", (e) => {
  if (e.target.dataset.plus) {
    let selectedItem = DataArray.filter(
      (x) => e.target.dataset.plus === x.id
    )[0];
    if (OrderMenu.includes(selectedItem)) {
      selectedItem.quantity++;
    } else {
      OrderMenu.unshift(selectedItem);
    }
    Orderhtml();
  } else if (e.target.dataset.remove) {
    let selectedItem = OrderMenu.filter(
      (x) => e.target.dataset.remove === x.id
    )[0];
    if (selectedItem.quantity > 1) {
      selectedItem.quantity--;
    } else {
      Removeitem(selectedItem.id);
    }
    Orderhtml();
  }
});
function menuHtml() {
  let Html = DataArray.map((item) => {
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
  Menu.innerHTML = Html;
}
menuHtml();

function Orderhtml() {
  let Html = OrderMenu.map((item) => {
    return `
     <div class="menu-item">
      <div class="icon">
        ${item.emoji}
      </div>
      <div>
        <h3>${item.name}</h3>
        <p>${item.ingredients}</p>
        <p>$${item.price * item.quantity}</p>
      </div> 
      <p> ${item.quantity}</p>
      <button class="add-to-cart" data-remove=${item.id}>Remove</button>
    </div>
  `;
  }).join("");
  Order.innerHTML = Html;
}
