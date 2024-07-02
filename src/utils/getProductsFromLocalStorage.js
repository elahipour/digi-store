function getProductsFromLocalStorage(products) {
  let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));

  if (productsInLocalStorage) return productsInLocalStorage;

  localStorage.setItem("products", JSON.stringify(products));
  productsInLocalStorage = JSON.parse(localStorage.getItem("products"));
  return productsInLocalStorage;
}

export { getProductsFromLocalStorage };
