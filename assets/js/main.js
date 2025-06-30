// Meu Script

// Menu responsivo
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navList.classList.toggle("active");
});

// Scroll
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if(targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll para baixo — esconde o nav
    nav.classList.add('hide');
  } else {
    // Scroll para cima — mostra o nav
    nav.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // para evitar valores negativos no topo
});

// Contador de caracteres
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', () => {
  charCount.textContent = textarea.value.length;
});