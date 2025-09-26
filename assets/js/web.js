export const projetosWeb = [
    {
        nome: 'Teacher Camila',
        imagem: 'assets/images/projects/projetoTeachercamila.png',
        descricao: 'Site com cadastro, login, agendamento de aulas e contato.',
        tecnologias: [
            { nome: 'HTML', icone: 'assets/images/icons/html-5.png' },
            { nome: 'CSS', icone: 'assets/images/icons/css-3.png' },
            { nome: 'JavaScript', icone: 'assets/images/icons/js.png' },
            { nome: 'PHP', icone: 'assets/images/icons/php.png' }
        ],
        github: 'https://github.com/juanpfr/teacher-camila',
        deploy: null
    },
    {
        nome: 'TakeOne',
        imagem: 'assets/images/projects/takeone.png',
        descricao: 'Site com sistema de cadastro, login dos clientes agendamento de data, horário, serviços, equipamentos, espaços e equipes personalizadas com funcinário da própria TakeOne, o cliente pode montar tudo do jeito que preferir, também salvar seus próprios equipamentos no seu perfil e contato para dúvidas.',
        tecnologias: [
            { nome: 'HTML', icone: 'assets/images/icons/html-5.png' },
            { nome: 'CSS', icone: 'assets/images/icons/css-3.png' },
            { nome: 'JavaScript', icone: 'assets/images/icons/js.png' },
            { nome: 'Python', icone: 'assets/images/icons/python.png' }
        ],
        github: 'https://github.com/juanpfr/takeone',
        deploy: null
    },
    {
        nome: 'Portfólio',
        imagem: 'assets/images/projects/portfolio.png',
        descricao: 'Meu site pessoal.',
        tecnologias: [
            { nome: 'HTML', icone: 'assets/images/icons/html-5.png' },
            { nome: 'CSS', icone: 'assets/images/icons/css-3.png' },
            { nome: 'JavaScript', icone: 'assets/images/icons/js.png' }
        ],
        github: 'https://github.com/juanpfr/portfolio',
        deploy: 'https://juanpfr.github.io/portfolio'
    },
    {
        nome: 'Sistema Solar',
        imagem: 'assets/images/projects/projetosistemasolar.png',
        descricao: 'Desafio do sistema solar feito apenas com linguagens de marcação.',
        tecnologias: [
            { nome: 'HTML', icone: 'assets/images/icons/html-5.png' },
            { nome: 'CSS', icone: 'assets/images/icons/css-3.png' }
        ],
        github: 'https://github.com/juanpfr/sistema-solar',
        deploy: 'https://juanpfr.github.io/sistema-solar'
    },
    {
        nome: 'Clínica Matarazzo',
        imagem: 'assets/images/projects/clinicamatarazzo.png',
        descricao: 'Site apenas front-end de uma clínica fictícia.',
        tecnologias: [
            { nome: 'HTML', icone: 'assets/images/icons/html-5.png' },
            { nome: 'CSS', icone: 'assets/images/icons/css-3.png' },
            { nome: 'JavaScript', icone: 'assets/images/icons/js.png' }
        ],
        github: 'https://github.com/juanpfr/clinica-matarazzo',
        deploy: 'https://juanpfr.github.io/clinica-matarazzo/'
    },
];

// Grid
const grid = document.getElementById('projetos-grid');
const popup = document.getElementById('popup-detalhes');
const popupInfo = document.getElementById('popup-info');
const fecharBtn = document.querySelector('.popup-fechar');

// Render cards
projetosWeb.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');

    card.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}">
    <h3>${p.nome}</h3>
    <button class="ver-mais-btn">Ver detalhes</button>
  `;

    card.querySelector('.ver-mais-btn').addEventListener('click', () => abrirPopup(p));
    grid.appendChild(card);
});

// Abrir popup
function abrirPopup(p) {
    popupInfo.innerHTML = `
    <h2>${p.nome}</h2>
    <img src="${p.imagem}" alt="${p.nome}" class="popup-img">
    <p class="descricao">${p.descricao}</p>

    <div class="tecnologias">
      <h3>Tecnologias</h3>
      <div class="tecnologias-list">
        ${p.tecnologias.map(t => `
          <img src="${t.icone}" alt="${t.nome}" title="${t.nome}">
        `).join('')}
      </div>
    </div>

    <div class="botoes-links">
      ${p.github ? `<a href="${p.github}" target="_blank" class="btn">GitHub</a>` : ''}
      ${p.deploy ? `<a href="${p.deploy}" target="_blank" class="btn">Ver Deploy</a>` : ''}
    </div>
  `;
    popup.classList.add('ativo');
}

// Fechar popup
fecharBtn.addEventListener('click', () => {
    popup.classList.remove('ativo');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.remove('ativo');
});
