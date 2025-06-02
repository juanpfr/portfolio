// Meu Script

// Menu responsivo
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navList.classList.toggle("active");
});

// Carrossel

function scrollCarousel(direction) {
  const container = document.getElementById("carousel");
  const scrollAmount = 320;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}