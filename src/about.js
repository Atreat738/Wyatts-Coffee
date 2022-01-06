export default function about() {
    const content = document.createElement('div');
    content.classList.add('aboutBackground');
    content.id = 'content';
    document.body.appendChild(content);

    const aboutContainerDiv = document.createElement('div');
    aboutContainerDiv.classList.add('aboutContainerDiv');
    content.appendChild(aboutContainerDiv);

    const aboutBoard = document.createElement('div');
    aboutBoard.classList.add('aboutBoard');
    aboutContainerDiv.appendChild(aboutBoard);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('aboutImageDiv');
    aboutBoard.appendChild(imageDiv);

    const imageCaption = document.createElement('p');
    imageCaption.classList.add('aboutImageCaption');
    imageCaption.textContent = 'The Doctor Professor of Coffee: Wyatt';
    aboutBoard.appendChild(imageCaption);


    const aboutText = document.createElement('p');
    aboutText.classList.add('aboutText');
    aboutText.textContent = 'Wyatt\'s Coffee was established in 2017 when an ambitious little furball came across a radioactive coffee bean. What followed was only natural. The little furball ate the bean, and was gifted a supreme knowledge over coffee and coffee accessories. This naturally lead Wyatt(the furball) to start a coffee shop catering to humans. As you may have seen on our menu, there are no prices. Please offer appeasement gifts toward the sentient feline and enjoy your drink!';
    aboutBoard.appendChild(aboutText);
    
    return content;
}