import './style.css';

import header from './header.js';
import blackWhiteCoffee from './images/BlackWhiteCoffee.png';

const homeBackground = new Image();
homeBackground.src = blackWhiteCoffee;


document.body.appendChild(header());
