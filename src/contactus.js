export default function contactUs() {
    const content = document.createElement('div');
    content.classList.add('contactUsBackground');
    content.id = 'content';
    document.body.appendChild(content);


    const contactTest = document.createElement('h5');
    contactTest.textContent = 'Contact Test';
    content.appendChild(contactTest);
    
    return content;
}