// Variável para selecionar o botão de navegação e o menu
const toggleNavButton = document.getElementById('toggleNav');
const navMenu = document.getElementById('navMenu');
// Função para alternar a visibilidade do menu
function toggleMenu() {
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}
// Adiciona um ouvinte de evento para quando o botão de navegação é clicado
toggleNavButton.addEventListener('click', toggleMenu);