import portfolio from "./views/portfolio.js";
import about from "./views/about.js";
import blog from "./views/blog.js";

const routes = {
    "/": { title: "Portfolio", render: portfolio },
    "/about": { title: "About", render: about },
    "/blog": { title: "Blog", render: blog },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);