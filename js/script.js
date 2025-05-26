let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll < lastScrollTop && currentScroll > 50) {
        navbar.classList.add("fixed-top", "bg-dark");
        document.body.style.paddingTop = navbarHeight + "px";
    } else {
        navbar.classList.remove("fixed-top", "bg-dark");
        document.body.style.paddingTop = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
