import banner from "../component/banner";
import newList from "../component/newList";
import footer from "../component/footer";

const homePage = {
    render(){
        return /*html*/ `
        <div class="banner">
          ${banner.render()}
        </div> 
         
        <div class="newList">
          ${newList.render()}
        </div>

        <div class="footer">
          ${footer.render()}
        </div>
        `;
    },
};
export default homePage;