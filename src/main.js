import Navigo from "navigo";
import homePage from "./page/homePage";
import gioithieu from "./page/gioitieu";
import about from "./page/about";
import content from "./page/content";
import NotFoundPage from "./page/notFound";
const router = new Navigo("/",{linksSelector:"a"});
const print = async (content) => {
  document.querySelector("#app").innerHTML = await content.render();
  
}
router.on ({
  "/": () => {
    print(homePage);
  },
  "/gioithieu": () => {
    print(gioithieu);
  },
  "/lienhe": () => {
    print(about);
  },
  "/baiviet": () => {
    print(content);
  }
});

router.notFound(() => print(NotFoundPage.render()));
router.resolve();

