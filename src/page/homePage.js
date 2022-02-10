import banner from "../component/banner";
// import newList from "../component/newList";
import footer from "../component/footer";
import products from "../component/products";

const homePage = {
   async render(){
        return /*html*/ `
        <div class="banner">
          ${banner.render()}
        </div> 
         
        <div class="newList pb-52">
          ${await products.render()}
        </div>

        <div class="footer">
          ${footer.render()}
        </div>
        `;
    },
};
export default homePage;