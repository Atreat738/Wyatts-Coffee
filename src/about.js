export default function about() {
    const content = document.createElement('div');
    content.classList.add('aboutBackground');
    content.id = 'content';
    document.body.appendChild(content);


    const h5test = document.createElement('h5');
    h5test.textContent = 'About Test';
    content.appendChild(h5test);
    
    return content;
}