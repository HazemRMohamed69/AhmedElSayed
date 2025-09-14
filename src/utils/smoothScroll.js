// Smooth scroll utility function
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Handle contact link click
export const handleContactClick = (e) => {
  e.preventDefault();
  smoothScrollTo("contact");
};
