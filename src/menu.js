export default function menu() {
    const content = document.createElement('div');
    content.classList.add('menuBackground');
    content.id = 'content';
    document.body.appendChild(content);


    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.classList.add('menuContainerDiv');
    content.appendChild(menuContainerDiv);

    const menuBoard = document.createElement('div');
    menuBoard.classList.add('menuBoard');
    menuContainerDiv.appendChild(menuBoard);

    //Begin Drink Menu
    const drinkH2 = document.createElement('h2');
    drinkH2.textContent = 'Beverages';
    drinkH2.classList.add('drinkH2');
    menuBoard.appendChild(drinkH2);

    const drinkList = document.createElement('ul');
    drinkList.classList.add('drinkList');
    menuBoard.appendChild(drinkList);

    const drink1 = document.createElement('li');
    drink1.textContent = 'Medium Roast'
    drink1.classList.add('menuLi');
    drinkList.appendChild(drink1);

    const drink2 = document.createElement('li');
    drink2.textContent = 'Dark Roast'
    drink2.classList.add('menuLi');
    drinkList.appendChild(drink2);

    const drink3 = document.createElement('li');
    drink3.textContent = 'Mocha (Hot/Cold)'
    drink3.classList.add('menuLi');
    drinkList.appendChild(drink3);

    const drink4 = document.createElement('li');
    drink4.textContent = 'White Mocha (Hot/Cold)'
    drink4.classList.add('menuLi');
    drinkList.appendChild(drink4);

    const drink5 = document.createElement('li');
    drink5.textContent = 'Caramel Espresso Latte'
    drink5.classList.add('menuLi');
    drinkList.appendChild(drink5);
    //END Drink Menu

    //Begin Pastry/Food Menu
    const foodH2 = document.createElement('h2');
    foodH2.textContent = 'Pastries';
    foodH2.classList.add('foodH2');
    menuBoard.appendChild(foodH2);

    const foodList = document.createElement('ul');
    foodList.classList.add('foodList');
    menuBoard.appendChild(foodList);

    const food1 = document.createElement('li');
    food1.textContent = 'Scone (Blueberry/Orange/Cinnamon)';
    food1.classList.add('menuLi');
    foodList.appendChild(food1);

    const food2 = document.createElement('li');
    food2.textContent = 'Muffin (Chocolate/Blueberry/Caramel)';
    food2.classList.add('menuLi');
    foodList.appendChild(food2);

    const food3 = document.createElement('li');
    food3.textContent = 'Cookie (Chocolate Chip/Snickerdoodle/Sugar)';
    food3.classList.add('menuLi');
    foodList.appendChild(food3);

    const food4 = document.createElement('li');
    food4.textContent = 'Cake Pop (Vanilla/Chocolate/Strawberry)';
    food4.classList.add('menuLi');
    foodList.appendChild(food4);
    //END Pastry/Food Menu

    return content;
}