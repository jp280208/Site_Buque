document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Correção do Scroll
    if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
    window.scrollTo(0, 0);

    // 2. Tela de Carregamento
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    }, 1500); // Reduzi levemente o tempo para o usuário não esperar muito

    // 3. Observer Premium de Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 }); // Só ativa quando 15% do item está visível

    // Incluindo a nova classe reveal-zoom
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom');
    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Menu Mobile mais fluido
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Usa o css text para adicionar a transição suave no menu
            if(navMenu.style.opacity === '1') {
                navMenu.style.opacity = '0';
                setTimeout(() => navMenu.style.display = 'none', 300);
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '120px'; // Ajuste conforme a altura da sua navbar
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'rgba(244, 249, 255, 0.98)';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                navMenu.style.transition = 'opacity 0.3s ease';
                
                // Pequeno delay para a animação de opacidade funcionar
                setTimeout(() => navMenu.style.opacity = '1', 10);
            }
        });
    }
});
