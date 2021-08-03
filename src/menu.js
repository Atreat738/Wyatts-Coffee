export default function menu() {
    const content = document.createElement('div');
    content.classList.add('menuBackground');
    content.id = 'content';
    document.body.appendChild(content);


    const menuTest = document.createElement('h5');
    menuTest.textContent = 'Menu Test';
    content.appendChild(menuTest);
    
    return content;
}