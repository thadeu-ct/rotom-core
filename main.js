// Seleciona todos os elementos necessários
const navItems = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.nav-indicator');

// Função para definir a posição inicial do indicador
function setInitialIndicator() {
    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        // Calcula a posição do item ativo e centraliza o indicador nele
        const itemWidth = activeItem.offsetWidth;
        indicator.style.width = `${itemWidth}px`; // Ajusta a largura do indicador
        indicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
    }
}

// Adiciona um evento de clique a cada item da navegação
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Previne o comportamento padrão do link
        e.preventDefault();

        // 1. Remove a classe 'active' do item que estava ativo
        document.querySelector('.nav-item.active').classList.remove('active');

        // 2. Adiciona a classe 'active' ao item que foi clicado
        item.classList.add('active');

        // 3. Move o indicador para a nova posição
        const itemWidth = item.offsetWidth;
        indicator.style.width = `${itemWidth}px`;
        indicator.style.transform = `translateX(${item.offsetLeft}px)`;
    });
});

// Define a posição inicial assim que a página carrega
window.addEventListener('load', setInitialIndicator);
// Recalcula se a janela for redimensionada
window.addEventListener('resize', setInitialIndicator);
