// Dados das armações
const frames = [
    {
        id: 1,
        name: 'Armação Elegance',
        description: 'Design moderno e confortável, perfeita para o dia a dia',
        price: 'R$ 299,90',
        material: 'Acetato',
        medidas: '54-18-140',
        category: ['grau', 'feminino', 'unissex'],
        image: 'img/oculos (1).png'
    },
    {
        id: 2,
        name: 'Armação Classic',
        description: 'Estilo atemporal e sofisticado, ideal para ambientes formais',
        price: 'R$ 349,90',
        material: 'Metal',
        medidas: '56-18-145',
        category: ['grau', 'masculino', 'unissex'],
        image: 'img/oculos (2).png'
    },
    {
        id: 3,
        name: 'Armação Sport',
        description: 'Resistente e leve, perfeita para atividades físicas',
        price: 'R$ 279,90',
        material: 'Policarbonato',
        medidas: '58-20-150',
        category: ['grau', 'masculino', 'unissex'],
        image: 'img/oculos (3).png'
    },
    {
        id: 4,
        name: 'Armação Premium',
        description: 'Alta qualidade e acabamento impecável',
        price: 'R$ 499,90',
        material: 'Titânio',
        medidas: '52-16-135',
        category: ['grau', 'feminino'],
        image: 'img/oculos (4).png'
    },
    {
        id: 5,
        name: 'Armação Trend',
        description: 'Tendência da moda atual, design arrojado',
        price: 'R$ 329,90',
        material: 'Acetato',
        medidas: '55-19-142',
        category: ['grau', 'feminino', 'unissex'],
        image: 'img/oculos (5).png'
    },
    {
        id: 6,
        name: 'Armação Comfort',
        description: 'Máximo conforto para uso prolongado',
        price: 'R$ 259,90',
        material: 'Acetato',
        medidas: '57-18-145',
        category: ['grau', 'masculino', 'unissex'],
        image: 'img/oculos (6).png'
    },
    {
        id: 7,
        name: 'Sol Aviator',
        description: 'Clássico estilo aviador para proteção solar',
        price: 'R$ 189,90',
        material: 'Metal',
        medidas: '58-20-150',
        category: ['sol', 'masculino', 'unissex'],
        image: 'img/oculos (7).png'
    },
    {
        id: 8,
        name: 'Sol Fashion',
        description: 'Design fashion para quem busca estilo',
        price: 'R$ 219,90',
        material: 'Acetato',
        medidas: '56-18-145',
        category: ['sol', 'feminino'],
        image: 'img/oculos (8).png'
    },
    {
        id: 9,
        name: 'Sol Sport',
        description: 'Proteção UV completa para esportes',
        price: 'R$ 249,90',
        material: 'Policarbonato',
        medidas: '60-22-155',
        category: ['sol', 'masculino', 'unissex'],
        image: 'img/oculos (1).png'
    },
    {
        id: 10,
        name: 'Kids Color',
        description: 'Armação colorida e resistente para crianças',
        price: 'R$ 179,90',
        material: 'Policarbonato',
        medidas: '48-16-130',
        category: ['grau', 'infantil'],
        image: 'img/oculos (2).png'
    },
    {
        id: 11,
        name: 'Kids Fun',
        description: 'Design divertido que as crianças adoram',
        price: 'R$ 199,90',
        material: 'Acetato',
        medidas: '50-17-135',
        category: ['grau', 'infantil'],
        image: 'img/oculos (3).png'
    },
    {
        id: 12,
        name: 'Armação Executive',
        description: 'Elegância e sofisticação para executivos',
        price: 'R$ 399,90',
        material: 'Titânio',
        medidas: '54-18-140',
        category: ['grau', 'masculino', 'unissex'],
        image: 'img/oculos (4).png'
    }
];

// Estado dos filtros
let currentFilter = 'all';

// Renderizar armações
function renderFrames(filter = 'all') {
    const framesGrid = document.getElementById('framesGrid');
    if (!framesGrid) return;
    
    const filteredFrames = filter === 'all' 
        ? frames 
        : frames.filter(frame => frame.category.includes(filter));
    
    framesGrid.innerHTML = filteredFrames.map(frame => `
        <div class="frame-card" data-id="${frame.id}">
            <div class="frame-image">
                <img src="${frame.image}" alt="${frame.name}">
            </div>
            <div class="frame-info">
                <h3 class="frame-name">${frame.name}</h3>
                <p class="frame-description">${frame.description}</p>
                <p class="frame-price">${frame.price}</p>
            </div>
        </div>
    `).join('');
    
    // Adicionar event listeners aos cards
    const frameCards = framesGrid.querySelectorAll('.frame-card');
    frameCards.forEach(card => {
        card.addEventListener('click', () => {
            const frameId = parseInt(card.dataset.id);
            openModal(frameId);
        });
    });
}

// Abrir modal
function openModal(frameId) {
    const frame = frames.find(f => f.id === frameId);
    if (!frame) return;
    
    const modal = document.getElementById('frameModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="margin-bottom: 30px;">
                <img src="${frame.image}" alt="${frame.name}" style="max-width: 100%; height: auto; border-radius: 8px;">
            </div>
            <h2 style="margin-bottom: 15px; color: var(--text-dark);">${frame.name}</h2>
            <p style="color: var(--text-light); margin-bottom: 20px; line-height: 1.8;">${frame.description}</p>
            <div style="background: var(--bg-light); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <div style="margin-bottom: 10px;">
                    <strong>Material:</strong> ${frame.material}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Medidas:</strong> ${frame.medidas}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Categoria:</strong> ${frame.category.join(', ')}
                </div>
            </div>
            <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color); margin-bottom: 30px;">
                ${frame.price}
            </div>
            <a href="#contato" class="btn btn-primary scroll-to-footer">Entrar em contato</a>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Adicionar scroll suave ao botão do modal
    const scrollLink = modalBody.querySelector('.scroll-to-footer');
    if (scrollLink) {
        scrollLink.addEventListener('click', () => {
            closeModal();
        });
    }
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('frameModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Event listeners dos filtros
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar active ao botão clicado
            button.classList.add('active');
            // Atualizar filtro
            currentFilter = button.dataset.filter;
            // Renderizar armações filtradas
            renderFrames(currentFilter);
        });
    });
    
    // Fechar modal ao clicar no X
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('frameModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Renderizar armações iniciais
    renderFrames();
});

