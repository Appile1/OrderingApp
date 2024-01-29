import { DataArray } from "./data.js";
let OrderMenu = [];
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
  } else if (e.target.id === "complete-order") {
    document.getElementById("model").classList.add("flex");
  } else if (e.target.id === "Payed") {
    e.preventDefault();
    document.getElementById("model").classList.remove("flex");
    Order.innerHTML = `
   <div>
   <h2> Your Order is on the way ;) </h2>
   </div> 
  `;
    document.getElementById("total").innerHTML = "";
  }
});
function menuHtml() {
  let Html = DataArray.map((item) => {
    return `
        <div class="menu-item">
          <div class="icon">
          <img src=${item.img}/> 
          </div>
          <div class="data-in-menu">
            <h3>${item.name}</h3>
            <p  class="ingredients" >${item.ingredients}</p>
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
        <img src=${item.img}/> 
      </div>
      <div class="data-in-menu" >
        <h3>${item.name}</h3>
        <p class="ingredients">${item.ingredients}</p>
        <p>$${item.price * item.quantity}</p>
      </div> 
      <p class="quantity"> ${item.quantity}</p>
      <button class="remove" data-remove=${item.id}>Remove</button>
    </div>
  `;
  }).join("");
  let total = OrderMenu.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  Order.innerHTML = Html;

  document.getElementById(
    "total"
  ).innerHTML = `<div class="total"> <p> <span class="text">Total : </span> <span class="price"> $${total.toFixed(
    2
  )} </span></p>
  <button id="complete-order">Confirm Order</button>
  </div>`;

  if (OrderMenu.length === 0) {
    document.getElementById("complete-order").disabled = true;
  } else {
    document.getElementById("complete-order").disabled = false;
  }
}

function Removeitem(id) {
  let newCart = OrderMenu.filter((x) => x.id !== id);
  OrderMenu = newCart;
}
