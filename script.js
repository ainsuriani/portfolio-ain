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

// =======================
// Background Audio
// =======================

// Create audio element dynamically
const bgAudio = document.createElement("audio");
bgAudio.id = "bgAudio";
bgAudio.src = "audio/background.mp3"; // <-- make sure the path is correct
bgAudio.autoplay = true;
bgAudio.loop = true;
bgAudio.muted = true; // start muted
bgAudio.style.display = "none"; // hide element
document.body.appendChild(bgAudio);

// Enable audio after user interaction
function enableAudio() {
  bgAudio.muted = false;
  bgAudio.volume = 0.3; // soft background volume
  document.removeEventListener("click", enableAudio);
  document.removeEventListener("scroll", enableAudio);
}

document.addEventListener("click", enableAudio);
document.addEventListener("scroll", enableAudio);
