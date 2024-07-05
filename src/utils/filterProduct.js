function filterProduct(products,searchParams){
    const category=searchParams.get('category')||'laptop';
    const search=searchParams.get('search')||'';
    let lessthan=searchParams.get('lessthan')||10000000000;
    let brand=searchParams.get('brand')||'';
    brand=brand.split('_');
    console.log(brand)
    const filteredProducts=products.filter(product=>product.productCategory.toLowerCase()===category.toLowerCase());
    const searchResult=filteredProducts.filter(product=>product.product.toLowerCase().includes(search.toLowerCase()));
    const filteredPrice=searchResult.filter(product=>product.productPrice<lessthan);
    const filterBrand=filteredPrice.filter(product=>brand.find(brand=>brand===product.brand))

    return filterBrand;
}

export {filterProduct}