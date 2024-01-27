export let cart = [];

export function Removeitem(id) {
  let Newcart = cart.filter((X) => X.id !== id);
  cart = Newcart;
}
