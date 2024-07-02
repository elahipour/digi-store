function getCartItemsFromLocalStorage(){
    const cartInLocalStorage=JSON.parse(localStorage.getItem('cart'));
    return cartInLocalStorage || [];
}

  export {getCartItemsFromLocalStorage}