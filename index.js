document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CORREÇÃO: FORÇAR O SITE A ABRIR NO TOPO ---
    // Isso impede que o navegador lembre a rolagem anterior ao atualizar
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // --- 2. TELA DE CARREGAMENTO (LOADING) ---
    // Mantém o loading visível por 2.5s e depois some suavemente
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0'; // Começa a desaparecer
        
        setTimeout(() => {
            loader.style.display = 'none'; // Remove da tela
        }, 800);
    }, 2500);

    // --- 3. ANIMAÇÃO AO ROLAR (SCROLL REVEAL) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.1 // Ativa quando 10% do item aparece na tela
    });

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. FAQ (ACORDEÃO) ---
    const faqButtons = document.querySelectorAll('.accordion-header');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            
            // Fecha os outros itens para deixar apenas um aberto (opcional)
            document.querySelectorAll('.accordion-item').forEach(i => {
                if(i !== item) i.classList.remove('active');
            });

            // Alterna (abre/fecha) o item clicado
            item.classList.toggle('active');
        });
    });

    // --- 5. MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Lógica simples para mostrar o menu mobile
            if(navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px'; // Altura do cabeçalho
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#fff'; // Fundo branco
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                navMenu.style.zIndex = '999';
            }
        });
    }
});
