
const toggleNavButton = document.getElementById('toggleNav');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
    navMenu.classList.toggle('hidden');
}

toggleNavButton.addEventListener('click', toggleMenu);