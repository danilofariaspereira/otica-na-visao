// Dados dos serviços
const serviceData = {
    'service-1': {
        icon: '👁️',
        title: 'Exame de Vista',
        description: 'Realizamos exames completos e precisos para avaliar sua acuidade visual, detectar problemas de refração e prescrever a melhor solução para suas necessidades. Utilizamos equipamentos de última geração para garantir resultados precisos.',
        details: [
            'Teste de acuidade visual',
            'Medição de pressão intraocular',
            'Exame de fundo de olho',
            'Prescrição personalizada'
        ]
    },
    'service-2': {
        icon: '🔧',
        title: 'Ajustes',
        description: 'Oferecemos serviços de ajuste e manutenção de armações para garantir máximo conforto e durabilidade. Nossa equipe especializada realiza ajustes precisos nas hastes, ponte e lentes.',
        details: [
            'Ajuste de hastes',
            'Alinhamento de lentes',
            'Reparo de armações',
            'Limpeza profissional'
        ]
    },
    'service-3': {
        icon: '💼',
        title: 'Consultoria',
        description: 'Nossa equipe de consultores especializados ajuda você a escolher a armação perfeita, considerando formato do rosto, estilo pessoal, necessidades visuais e orçamento.',
        details: [
            'Análise de formato facial',
            'Recomendações personalizadas',
            'Orientação sobre materiais',
            'Consultoria de estilo'
        ]
    },
    'service-4': {
        icon: '🛠️',
        title: 'Manutenção',
        description: 'Mantenha seus óculos sempre em perfeito estado com nossos serviços de manutenção preventiva e corretiva. Oferecemos limpeza, reparos e substituição de peças.',
        details: [
            'Limpeza profunda',
            'Substituição de parafusos',
            'Reparo de hastes',
            'Manutenção preventiva'
        ]
    }
};

// Dados dos equipamentos
const equipmentData = {
    'equipment-1': {
        icon: '🔬',
        title: 'Foróptero',
        description: 'Equipamento essencial para exames de refração, permitindo determinar com precisão o grau necessário para correção visual. Nosso foróptero digital oferece resultados rápidos e precisos.',
        details: [
            'Exame de refração completo',
            'Determinação precisa do grau',
            'Tecnologia digital avançada',
            'Resultados instantâneos'
        ]
    },
    'equipment-2': {
        icon: '📐',
        title: 'Topógrafo',
        description: 'Equipamento de alta tecnologia para mapeamento da córnea, essencial para adaptação de lentes de contato e diagnóstico de problemas corneanos. Fornece imagens detalhadas em 3D.',
        details: [
            'Mapeamento completo da córnea',
            'Imagens em alta resolução 3D',
            'Essencial para lentes de contato',
            'Diagnóstico preciso de problemas corneanos'
        ]
    },
    'equipment-3': {
        icon: '🔍',
        title: 'Lensômetro',
        description: 'Instrumento preciso para medir o grau das lentes, garantindo que as prescrições sejam executadas corretamente. Nosso lensômetro digital oferece leituras instantâneas e precisas.',
        details: [
            'Medição precisa do grau',
            'Verificação de prescrições',
            'Tecnologia digital',
            'Leituras instantâneas'
        ]
    },
    'equipment-4': {
        icon: '⚙️',
        title: 'Laboratório',
        description: 'Laboratório completo e moderno para fabricação e montagem de lentes. Contamos com equipamentos de última geração para garantir qualidade e precisão em cada par de óculos fabricado.',
        details: [
            'Fabricação de lentes',
            'Montagem profissional',
            'Equipamentos de última geração',
            'Qualidade e precisão garantidas'
        ]
    }
};

// Dados das lentes
const lensData = {
    'lens-1': {
        icon: '🔹',
        title: 'Monofocal',
        description: 'Lentes com um único foco, ideais para correção de miopia, hipermetropia ou astigmatismo. Oferecemos lentes monofocais em diversos materiais, incluindo orgânicas, policarbonato e minerais.',
        details: [
            'Correção de um único problema visual',
            'Ótima qualidade óptica',
            'Disponível em diversos materiais',
            'Preço acessível'
        ]
    },
    'lens-2': {
        icon: '🔸',
        title: 'Multifocal',
        description: 'Lentes progressivas que corrigem visão de longe, intermediária e de perto em uma única lente, sem divisão visível. Perfeitas para presbiopia, oferecendo transição suave entre as diferentes distâncias.',
        details: [
            'Correção para todas as distâncias',
            'Sem linha divisória',
            'Adaptação progressiva',
            'Tecnologia de última geração'
        ]
    },
    'lens-3': {
        icon: '✨',
        title: 'Antirreflexo',
        description: 'Tratamento antirreflexo que elimina reflexos indesejados, melhora a transparência das lentes e reduz o cansaço visual. Ideal para uso em ambientes com muita iluminação ou uso de telas.',
        details: [
            'Reduz reflexos e brilhos',
            'Melhora a transparência',
            'Reduz cansaço visual',
            'Facilita a limpeza'
        ]
    },
    'lens-4': {
        icon: '☀️',
        title: 'Fotossensível',
        description: 'Lentes que escurecem automaticamente quando expostas à luz solar, funcionando como óculos de grau e de sol em um único par. Protegem os olhos dos raios UV e oferecem conforto visual em qualquer ambiente.',
        details: [
            'Escurecem na luz solar',
            'Proteção UV completa',
            'Conforto em qualquer ambiente',
            'Versatilidade e praticidade'
        ]
    }
};

// Função para abrir modal
function openInfoModal(data) {
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-info-content">
            <div class="modal-icon">${data.icon}</div>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-description">${data.description}</p>
            <div class="modal-details">
                <h3>Características:</h3>
                <ul class="modal-features">
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cards clicáveis
    const clickableCards = document.querySelectorAll('.clickable-card');
    
    clickableCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            let data = null;
            
            if (modalId.startsWith('service-')) {
                data = serviceData[modalId];
            } else if (modalId.startsWith('equipment-')) {
                data = equipmentData[modalId];
            } else if (modalId.startsWith('lens-')) {
                data = lensData[modalId];
            }
            
            if (data) {
                openInfoModal(data);
            }
        });
    });
    
    // Fechar modal
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('infoModal');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});

