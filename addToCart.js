import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// get the cart data from localstorage
// update the cart value and get the data always ready from localstorage

getCartProductFromLS();

// add data into localstorage

export const addToCart = (event,id,stock) =>{
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProductElem = document.querySelector(`#card${id}`);
  let quantity = currentProductElem.querySelector(".productQuantity").innerHTML;
  let price = currentProductElem.querySelector(".productPrice").innerHTML;

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find((curProd)=> curProd.id === id);

  if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updatedCart = {id,quantity,price};

    updatedCart = arrLocalStorageProduct.map((curProd)=>{
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    
    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

    // show toast when product add in the cart
    showToast("add",id);
  }

  if(existingProd){
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({id,quantity,price});
  localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  
  // show toast when product add in the cart
  showToast("add",id);
};