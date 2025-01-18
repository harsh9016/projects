import { getCartProductFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) =>{
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) =>  curProd.id !== id);

  // update the localstorage after remove product
  localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

  // remove the product onclick
  let removeDiv = document.getElementById(`card${id}`);
  if(removeDiv){
    removeDiv.remove();
    showToast("delete",id);
  }

  updateCartValue(cartProducts);
};