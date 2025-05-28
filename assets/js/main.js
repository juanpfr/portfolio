// Meu Script

// Menu responsivo
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
});