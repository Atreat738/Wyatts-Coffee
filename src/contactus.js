export default function contactUs() {
    const content = document.createElement('div');
    content.classList.add('contactUsBackground');
    content.id = 'content';
    document.body.appendChild(content);


    const contactContainerDiv = document.createElement('div');
    contactContainerDiv.classList.add('contactContainerDiv');
    content.appendChild(contactContainerDiv);

    const contactBoard = document.createElement('div');
    contactBoard.classList.add('contactBoard');
    contactContainerDiv.appendChild(contactBoard);

    const contactH2 = document.createElement('h2');
    contactH2.classList.add('contactH2');
    contactH2.textContent = 'Contact Us';
    contactBoard.appendChild(contactH2);

    const contactPhone = document.createElement('p');
    contactPhone.classList.add('contactInfo');
    contactPhone.textContent = 'Phone Number: 555-555-5555';
    contactBoard.appendChild(contactPhone);

    const contactEmail = document.createElement('p');
    contactEmail.classList.add('contactInfo');
    contactEmail.textContent = 'Email: DrProfessorCoffee@EspressoPaws.com';
    contactBoard.appendChild(contactEmail);

    const contactAddress = document.createElement('p');
    contactAddress.classList.add('contactInfo');
    contactAddress.textContent = 'Mailing Address: 1234 Oak Drive, Madison, Wisconsin, 53558';
    contactBoard.appendChild(contactAddress);
    
    return content;
}