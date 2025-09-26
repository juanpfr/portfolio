// Meu script

// menu responsivo
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("ul");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
});

// scroll suave
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Fechar menu se estiver aberto (mobile)
        navList.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// esconder nav no scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');
const popup = document.getElementById('popup-projetos');

window.addEventListener('scroll', () => {
    // Não roda se popup estiver aberto
    if (!popup.classList.contains('hidden')) return;

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        nav.classList.add('hide');
    } else {
        nav.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// contador de caracteres
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

if (textarea && charCount) {
    textarea.addEventListener('input', () => {
        charCount.textContent = textarea.value.length;
    });
}