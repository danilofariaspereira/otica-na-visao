// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = nav.classList.contains('active');
            
            if (isActive) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                menuToggle.classList.add('active');
                nav.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Prevenir que cliques dentro do menu fechem ele
        nav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && nav.classList.contains('active')) {
                if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
        
        // Fechar menu ao clicar em um link
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        // Pequeno delay para permitir a navegação
                        setTimeout(() => {
                            menuToggle.classList.remove('active');
                            nav.classList.remove('active');
                            document.body.style.overflow = '';
                        }, 100);
                    }
                });
            });
        }
    }
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Scroll suave para footer
const scrollToFooterLinks = document.querySelectorAll('.scroll-to-footer');

scrollToFooterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const footer = document.getElementById('contato');
        if (footer) {
            const headerHeight = header.offsetHeight;
            const footerPosition = footer.offsetTop - headerHeight;
            
            window.scrollTo({
                top: footerPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Validação do formulário de contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        
        let isValid = true;
        
        // Limpar erros anteriores
        clearErrors();
        
        // Validar nome
        if (!nome.value.trim()) {
            showError('nome', 'Nome é obrigatório');
            isValid = false;
        } else if (nome.value.trim().length < 3) {
            showError('nome', 'Nome deve ter pelo menos 3 caracteres');
            isValid = false;
        }
        
        // Validar telefone
        const telefoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!telefone.value.trim()) {
            showError('telefone', 'Telefone é obrigatório');
            isValid = false;
        } else if (!telefoneRegex.test(telefone.value)) {
            showError('telefone', 'Telefone inválido');
            isValid = false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('email', 'E-mail é obrigatório');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('email', 'E-mail inválido');
            isValid = false;
        }
        
        // Validar mensagem
        if (!mensagem.value.trim()) {
            showError('mensagem', 'Mensagem é obrigatória');
            isValid = false;
        } else if (mensagem.value.trim().length < 10) {
            showError('mensagem', 'Mensagem deve ter pelo menos 10 caracteres');
            isValid = false;
        }
        
        if (isValid) {
            // Simular envio (não há backend)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
            clearErrors();
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errorFields = document.querySelectorAll('.form-group input, .form-group textarea');
    const errorMessages = document.querySelectorAll('.error-message');
    
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
    
    errorMessages.forEach(message => {
        message.classList.remove('show');
        message.textContent = '';
    });
}

// Máscara de telefone
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            e.target.value = value;
        }
    });
}

// Fechar menu ao redimensionar a janela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});

