const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');
const link2 = document.getElementById('link2');
const sublinks = document.getElementById('sublinks');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

 // Mostrar/Ocultar sublinks ao clicar no Link 2
 link2.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o redirecionamento
    sublinks.style.display = sublinks.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('toggle-nav').addEventListener('click', function() {
const nav = document.getElementById('nav');
// Verifique se o nav está oculto
if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block'; // Mostra o nav
    document.getElementById('toggle-nav').style.transform = 'translate(180px, 0px)';
} else {
    nav.style.display = 'none'; // Esconde o nav
    document.getElementById('toggle-nav').style.transform = 'translate(0px, 0px)';
}
});

// Seleção dos títulos
const headings = document.querySelectorAll('h1, h2');
const navLinksContainer = document.getElementById('nav-links');

headings.forEach(heading => {
    const text = heading.textContent.trim();
    let id = text.toLowerCase()

    if (heading.tagName === 'H2') {
        id = '- ' + id; // Adiciona hífen no início
    }

    heading.id = id; // Atribui o ID ao elemento

    // Criação do link no menu de navegação
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = id;
    console.log(text)
    navLinksContainer.appendChild(link);
});