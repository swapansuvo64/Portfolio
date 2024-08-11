function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1200,
    once: true,
  });
});