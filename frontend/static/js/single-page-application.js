import Hem from "./views/Hem.js";
import Filmer from "./views/Filmer.js";
import Biljetter from "./views/Biljetter.js";
import FilmView from "./views/FilmView.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Hem },
    { path: "/filmer", view: Filmer },
    { path: "/biljetter", view: Biljetter },
    { path: "/film", view: FilmView },
  ];

  //Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  // Uses / (hem) as route if no match is found. Do 
  //we want to direct it elsewhere?
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});