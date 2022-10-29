const menu = document.getElementById("burger-menu");
const menuClose = document.getElementById("burger-menu-close");
const menuOpen = document.getElementById("burger-menu-open");
const menuBody = document.querySelector(".burger-menu__menu");

if (menuOpen) {
    menuOpen.addEventListener("click", function () {
        if (menu) {
            menu.setAttribute("data-open", "");
            document.body.classList.add("_lock");
        }
    });
}

if (menuClose) {
    menuClose.addEventListener("click", function () {
        if (menu) {
            menu.removeAttribute("data-open");
            document.body.classList.toggle("_lock");
        }
    });
}

if (menuBody) {
    menuBody.addEventListener("click", function () {
        menu.removeAttribute("data-open");
        document.body.classList.toggle("_lock");
    });
}
