const navItems = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.nav-indicator');

function setInitialIndicator() {
    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        const itemWidth = activeItem.offsetWidth;
        indicator.style.width = `${itemWidth}px`;
        indicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
    }
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.nav-item.active').classList.remove('active');

        item.classList.add('active');

        const itemWidth = item.offsetWidth;
        indicator.style.width = `${itemWidth}px`;
        indicator.style.transform = `translateX(${item.offsetLeft}px)`;
    });
});


async function loadComponent(url, placeholderId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Falha ao carregar ${url}: ${response.statusText}`);
        }
        const text = await response.text();
        document.getElementById(placeholderId).innerHTML = text;
    } catch (error) {
        console.error('Erro ao carregar componente:', error);
    }
}

function initApp() {
    loadComponent('componentes/header.html', 'header-placeholder');
    loadComponent('componentes/footer.html', 'footer-placeholder');

    setInitialIndicator();
}

document.addEventListener('DOMContentLoaded', initApp);
window.addEventListener('resize', setInitialIndicator);
