const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) =>{
  return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping" style="width: 45px;text-align: center;"> ${cartProducts.length}</i>`);
};