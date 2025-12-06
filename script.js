// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
  });
  
  // Mobile menu
  const mobileBtn = document.getElementById("mobileBtn");
  if (mobileBtn) {
    mobileBtn.onclick = () => {
      document.getElementById("mobileMenu").classList.toggle("hidden");
    };
  }
  
  // Back to top
  const topBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (topBtn) {
      topBtn.style.display = window.scrollY > 400 ? "block" : "none";
    }
  });
  
  if (topBtn) {
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
  