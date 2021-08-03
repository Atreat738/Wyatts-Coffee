import homePage from './home.js';
import menu from './menu.js';
import about from './about.js';
import contactUs from './contactus.js';


export default function header() {

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.appendChild(header);

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'Wyatt\'s Coffee';
    header.appendChild(headerh1);

    headerh1.addEventListener('click', () => {
        let content = document.querySelector('#content');
        document.body.removeChild(content);
        document.body.appendChild(homePage());
    })

    const headerul = document.createElement('ul');
    header.appendChild(headerul);
    
    const menuLink = document.createElement('li');
    const aboutLink = document.createElement('li');
    const contactLink = document.createElement('li');

    menuLink.textContent = 'Menu';
    menuLink.classList.add('menuLink');

    menuLink.addEventListener('click', () => {
        let content = document.querySelector('#content');
        document.body.removeChild(content);
        document.body.appendChild(menu());
    });

    aboutLink.textContent = 'About';
    aboutLink.classList.add('aboutLink');

    aboutLink.addEventListener('click', () => {
        let content = document.querySelector('#content');
        document.body.removeChild(content);
        document.body.appendChild(about());
    });

    contactLink.textContent = 'Contact Us';
    contactLink.classList.add('contactLink');

    contactLink.addEventListener('click', () => {
        let content = document.querySelector('#content');
        document.body.removeChild(content);
        document.body.appendChild(contactUs());
    });

    headerul.appendChild(menuLink);
    headerul.appendChild(aboutLink);
    headerul.appendChild(contactLink);


    return header;
}