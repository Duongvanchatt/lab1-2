import Navigo from "navigo";
import homePage from "./page/homePage";
import gioithieu from "./page/gioitieu";
import about from "./page/about";
import content from "./page/content";
import NotFoundPage from "./page/notFound";
const router = new Navigo("/",{linksSelector:"a"});
const print = (content) => {
  document.querySelector("#app").innerHTML = content;
}
router.on ({
  "trangchu": () => {
    print(homePage.render());
  },
  "gioithieu": () => {
    print(gioithieu.render());
  },
  "lienhe": () => {
    print(about.render());
  },
  "baiviet": () => {
    print(content.render());
  }
});

router.notFound(() => print(NotFoundPage.render()));
router.resolve();

