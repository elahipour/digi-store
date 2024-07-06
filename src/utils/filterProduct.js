function filterProduct(products,searchParams){
    const category=searchParams.get('category')||'laptop';
    const search=searchParams.get('search')||'';
    let lessthan=searchParams.get('lessthan')||10000000000;
    let brand=searchParams.get('brand')||'fujitsu_HP_asus_acer_lenovo_MSI_sony';
    brand=brand.split('_');

    const filteredProducts=products.filter(product=>product.productCategory.toLowerCase()===category.toLowerCase());
    const searchResult=filteredProducts.filter(product=>product.product.toLowerCase().includes(search.toLowerCase()));
    const filteredPrice=searchResult.filter(product=>product.productPrice<lessthan);
    const filterBrand=filteredPrice.filter(product=>brand.find(brand=>brand===product.brand))
    const sortedProducts=sortProducts(filterBrand,searchParams)
    return sortedProducts;

}
 function sortProducts(products,searchParams){
     const sortBy=searchParams.get('sortby')
     console.log(sortBy)
     const sortedProducts=products.sort((productPrev,productNext)=>{
       if(sortBy==='محبوب ترین')return productNext.totalLikes-productPrev.totalLikes
       if(sortBy==='گران ترین')return productNext.productPrice-productPrev.productPrice
       if(sortBy==='ارزان ترین')return productPrev.productPrice-productNext.productPrice
       if(sortBy==='پرفروش ترین')return productNext.salesNumber-productPrev.salesNumber
     })
    //  localStorage.setItem('products',JSON.stringify(sortedProducts))
     return sortedProducts;
   }
export {filterProduct}