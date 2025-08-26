/* -----------------------------------------
   Accessibility: Show focus outline only 
   for keyboard users 
----------------------------------------- */
const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

/* -----------------------------------------
   Back to Top Button 
----------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (isVisible) => {
  backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
  backToTopButton.style.opacity = isVisible ? 1 : 0;
  backToTopButton.style.transform = isVisible ? "scale(1)" : "scale(0)";
  backToTopButton.style.transition =
    "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s";
};

// Show button after scrolling 300px instead of 700px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (!isBackToTopRendered) {
      isBackToTopRendered = true;
      alterStyles(true);
    }
  } else {
    if (isBackToTopRendered) {
      isBackToTopRendered = false;
      alterStyles(false);
    }
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
