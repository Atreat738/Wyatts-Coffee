export default function header() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'Wyatt\'s Coffee';
    header.appendChild(headerh1);

    const headerul = document.createElement('ul');
    header.appendChild(headerul);
    
    const menuLink = document.createElement('li');
    const aboutLink = document.createElement('li');
    const contactLink = document.createElement('li');
    menuLink.textContent = 'Menu';
    aboutLink.textContent = 'About';
    contactLink.textContent = 'Contact Us';
    headerul.appendChild(menuLink);
    headerul.appendChild(aboutLink);
    headerul.appendChild(contactLink);

    return header;
}