import { getAll } from "../api/products";
const products = {
  async render (){ 
      const {data} = await getAll();
        return /*html*/`<div class="w-5/6 m-auto my-7 mb-20 h-80 flex justify-between flex-wrap">
         ${data.map((products)=> /*html*/`
        <div class="w-56 h-auto mb-10 bg-red-100 ">
        <img class="w-full" src="./img/sp1.jfif" alt="">
        <h2 class="text-lg text-red-500">${products.nameproducts}</h2>
        <p class="text-sm mt-2">${products.desc}</p>
        <p class="text-sm mt-2">${products.gia}</p>
        <p class="text-sm mt-2">${products.giamgia}</p>
        </div>
        `).join("")}
     </div>`
    }
}
export default products;