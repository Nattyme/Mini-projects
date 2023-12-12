const cardArray = [
    {
        name: 'fries',
        img: './images/fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.jpg',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.jpg',
    },
    {
        name: 'pizza',
        img: './images/pizza.jpg',
    },
    {
        name: 'fries',
        img: './images/fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.jpg',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.jpg',
    },
    {
        name: 'pizza',
        img: './images/pizza.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card);
        console.log(card, i);
    }
}
createBoard()

function flipCard {
    
}



