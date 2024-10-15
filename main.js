// Select the necessary DOM elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the sidebar menu on button click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
  // Change the icon based on the open state
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the sidebar when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Close the sidebar when clicking outside of it
window.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Smooth scrolling to sections when clicking on links
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior
    const targetId = this.getAttribute('href'); // Get the target section
    document.querySelector(targetId).scrollIntoView({ // Scroll smoothly
      behavior: 'smooth',
      block: 'start'
    });
    navLinks.classList.remove("open"); // Close the menu after click
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
});

// ScrollReveal for animations (Optional)
// Adjust as necessary if you are using ScrollReveal.js
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", scrollRevealOption);
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content .header__btn", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__card", { duration: 1000, interval: 500 });
ScrollReveal().reveal(".trainer__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });

// Swiper initialization (Optional)
// Adjust as necessary if you are using Swiper.js
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
