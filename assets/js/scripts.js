// Meu script

// importar projetos
import { projetos } from './projects.js';

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

// pop up dos projetos
const verProjetosLinks = document.querySelectorAll('.category-projetcs-card a');
const closeBtn = document.querySelector('.close-btn');
const projetosGrid = document.getElementById('projetos-grid');
const popupTitle = document.getElementById('popup-title');

verProjetosLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const categoria = link.getAttribute('data-category');
        abrirPopup(categoria);
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    document.body.style.overflow = ''; // libera scroll do body
});

function abrirPopup(categoria) {
    popupTitle.textContent = `Projetos: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
    projetosGrid.innerHTML = '';

    const filtrados = projetos.filter(p => p.categoria === categoria);

    if (filtrados.length === 0) {
        projetosGrid.innerHTML = '<p>Nenhum projeto encontrado.</p>';
    } else {
        filtrados.forEach(projeto => {
            const card = document.createElement('div');
            card.classList.add('projeto-card');
            card.innerHTML = `
                <img src="${projeto.imagem}" alt="${projeto.nome}">
                <h3>${projeto.nome}</h3>
                <button class="ver-mais-btn">Ver mais</button>
                <div class="descricao hidden">
                    <p>${projeto.descricao}</p>
                    <p><strong>Tecnologias:</strong></p>
                    <div class="tecnologias-list">
                    ${projeto.tecnologias.map(tech => `
                        <img src="${tech.icone}" alt="${tech.nome}" title="${tech.nome}">
                    `).join('')}
                    </div>
                </div>
            `;
            projetosGrid.appendChild(card);
        });

        projetosGrid.querySelectorAll('.ver-mais-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                abrirDetalhe(filtrados[index]);
            });
        });
    }

    popup.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // trava scroll do fundo
}

// detalhes dos projetos
const popupDetalhe = document.getElementById('popup-detalhe');
const closeBtnDetalhe = document.querySelector('.close-btn-detalhe');
const detalheNome = document.getElementById('detalhe-nome');
const detalheImagem = document.getElementById('detalhe-imagem');
const detalheDescricao = document.getElementById('detalhe-descricao');
const detalheTecnologias = document.getElementById('detalhe-tecnologias');

closeBtnDetalhe.addEventListener('click', () => {
    popupDetalhe.classList.add('hidden');
    document.body.style.overflow = ''; // libera scroll
});

function abrirDetalhe(projeto) {
    detalheNome.textContent = projeto.nome;
    detalheImagem.src = projeto.imagem;
    detalheImagem.alt = projeto.nome;
    detalheDescricao.textContent = projeto.descricao;

    detalheTecnologias.innerHTML = projeto.tecnologias.map(tech => `
    <img src="${tech.icone}" alt="${tech.nome}" title="${tech.nome}">
  `).join('');

    const detalheBotoes = document.getElementById('detalhe-botoes');

    let botoesHTML = `<a href="${projeto.github}" target="_blank">GitHub</a>`;

    if (projeto.deploy) {
        botoesHTML += `<a href="${projeto.deploy}" target="_blank">Ver Deploy</a>`;
    }

    detalheBotoes.innerHTML = botoesHTML;

    popupDetalhe.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // trava scroll do fundo
}
