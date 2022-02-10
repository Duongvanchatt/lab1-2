import url from "./url";
export const getAll = ()=>{
    const products = '/products';
    return url.get(products);
}