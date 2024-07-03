function filterProduct(products,searchParams){
    const category=searchParams.get('category')||'';
    const search=searchParams.get('search')||'';
    const filteredProducts=products.filter(product=>product.productCategory.toLowerCase()===category.toLowerCase());
    const result=filteredProducts.filter(product=>product.product.toLowerCase().includes(search.toLowerCase()));
    return result;
}

export {filterProduct}