export default function homePage() {
    const content = document.createElement('div');
    content.classList.add('homeBackground');
    content.id = 'content';
    document.body.appendChild(content);

    const homeDesc = document.createElement('p');
    homeDesc.textContent = 'Wyatt\'s Coffee provides super fast caffeinated services! We are dedicated to customer service, quality products, and delicious drinks! Come on in today for the boost you need!';
    homeDesc.classList.add('homeDesc');
    content.appendChild(homeDesc);
    
    return content;
}