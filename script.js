// =======================
// Navbar scroll effect
// =======================
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (nav) {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// =======================
// Mobile menu
// =======================
const mobileBtn = document.getElementById("mobileBtn");
if (mobileBtn) {
  mobileBtn.onclick = () => {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  };
}

// =======================
// Back to top
// =======================
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
// Background Audio (Cross-Browser)
// =======================

// Create audio element dynamically
const bgAudio = document.createElement("audio");
bgAudio.src = "audio/bgsound/mp3"; // <-- Update path if needed
bgAudio.loop = true;
bgAudio.autoplay = true;
bgAudio.muted = true; // starts muted for autoplay
bgAudio.style.display = "none";
document.body.appendChild(bgAudio);

// Function to enable audio after user interaction
function enableAudio() {
  bgAudio.muted = false;
  bgAudio.volume = 0.3; // soft background music
  // Remove listeners after first interaction
  document.removeEventListener("click", enableAudio);
  document.removeEventListener("scroll", enableAudio);
}

// Listen for first user interaction to unmute
document.addEventListener("click", enableAudio);
document.addEventListener("scroll", enableAudio);

// =======================
// Optional: Add a toggle button for user control
// =======================
const audioToggle = document.createElement("button");
audioToggle.textContent = "🔊";
audioToggle.id = "audioToggle";
audioToggle.style.position = "fixed";
audioToggle.style.bottom = "20px";
audioToggle.style.right = "20px";
audioToggle.style.padding = "10px";
audioToggle.style.borderRadius = "50%";
audioToggle.style.backgroundColor = "#1e293b";
audioToggle.style.color = "white";
audioToggle.style.border = "none";
audioToggle.style.cursor = "pointer";
document.body.appendChild(audioToggle);

// Toggle play/pause when button clicked
audioToggle.addEventListener("click", () => {
  if (bgAudio.paused) {
    bgAudio.play();
    audioToggle.textContent = "🔊";
  } else {
    bgAudio.pause();
    audioToggle.textContent = "🔇";
  }
});
