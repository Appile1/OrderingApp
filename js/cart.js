export function Removeitem(id) {
  let Newcart = cart.filter((x) => {
    return x.id !== id;
  });
  cart = Newcart;
}
