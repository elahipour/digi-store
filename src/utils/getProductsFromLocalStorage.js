function getProductsFromLocalStorage(products){
    let productsInLocalStorage=JSON.parse(localStorage.getItem('products'));
    if(!productsInLocalStorage) {
    localStorage.setItem('products', JSON.stringify(products));
    productsInLocalStorage=JSON.parse(localStorage.getItem('products'));
    console.log(productsInLocalStorage)
  }
    return productsInLocalStorage;
  }

  export {getProductsFromLocalStorage}