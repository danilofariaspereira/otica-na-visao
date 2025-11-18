// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
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

