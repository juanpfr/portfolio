export const projetosDesktopMobile = [
    {
        nome: 'Teacher Camila Desktop',
        imagem: 'assets/images/projects/projetoTeachercamilaDesktop.jpg',
        descricao: 'Aplicativo desktop para gerenciamento dos alunos e de funcionalidades no site.',
        tecnologias: [
            { nome: 'CSHARP', icone: 'assets/images/icons/csharp.png' }
        ],
        github: 'https://github.com/juanpfr/teacher-camila-desktop',
        deploy: null
    },
    {
        nome: 'Auto Mestre',
        imagem: 'assets/images/projects/projetoAutoMestre.png',
        descricao: 'Aplicativo desktop para gerenciamento dos clientes de funcionários da mecânica.',
        tecnologias: [
            { nome: 'CSHARP', icone: 'assets/images/icons/csharp.png' }
        ],
        github: 'https://github.com/juanpfr/auto-mestre-desktop',
        deploy: null
    },
    {
        nome: 'WebMotors Audi',
        imagem: 'assets/images/projects/webmotorsaudi.png',
        descricao: 'Aplicativo desktop para gerenciamento de carros da marca Audi dentro da loja',
        tecnologias: [
            { nome: 'Python', icone: 'assets/images/icons/python.png' }
        ],
        github: 'https://github.com/juanpfr/webmotors-audi',
        deploy: null
    },
];

// Grid
const grid = document.getElementById('projetos-grid');
const popup = document.getElementById('popup-detalhes');
const popupInfo = document.getElementById('popup-info');
const fecharBtn = document.querySelector('.popup-fechar');

// Render cards
projetosDesktopMobile.forEach(p => {
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
