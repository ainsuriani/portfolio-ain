// Mobile Menu
const ham = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

ham?.addEventListener("click", () => {
    mobileNav.style.display =
        mobileNav.style.display === "flex" ? "none" : "flex";
});

// Back to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// View My Work button
document.querySelector(".btn")?.addEventListener("click", () => {
    window.location.href = "portfolio.html";
});
