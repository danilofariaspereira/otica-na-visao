// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionId = header.getAttribute('data-accordion');
            const accordionContent = document.getElementById(accordionId);
            const accordionCard = header.closest('.accordion-card');
            
            // Verificar se já está ativo
            const isActive = header.classList.contains('active');
            
            // Fechar todos os accordions
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                const contentId = h.getAttribute('data-accordion');
                const content = document.getElementById(contentId);
                if (content) {
                    content.classList.remove('active');
                }
            });
            
            // Se não estava ativo, abrir este
            if (!isActive) {
                header.classList.add('active');
                if (accordionContent) {
                    accordionContent.classList.add('active');
                }
            }
        });
    });
});

