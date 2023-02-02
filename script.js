const mario = {};
const position = {};
const marioStyle = document.querySelector(".mario-style");
const appearence = document.querySelector('.appearence');
const area = document.querySelector('.area');
const buttonBomb = document.querySelector('.bomb');


position.horizontalCount = 0;
position.verticalCount = 0;

// Функция выдает рандомное целое число больше 5
function getRandomInt(max) {
    let result = Math.floor(Math.random() * max);
    switch (result) {
        case 5: return result + 1;
            break;
        case 4: return result + 2;
            break;
        case 3: return result + 3;
            break;
        case 2: return result + 4;
            break;
        case 1: return result + 5;
            break;
        case 0: return result + 6;
            break;
        default: return result;
    }
}

// кнопка появления(сброса)
mario.app = function (elem) {
    if (getComputedStyle(elem).display === 'block') {
        elem.style.display = "none";
    }
    else {
        elem.style.display = "block";
        position.horizontalCount = 0;
        position.verticalCount = 0;
     
        elem.style.left = '0';
        elem.style.top = 0;
    }
}

//передвижение вправо
mario.moveRight = function (elem) {
    if (position.horizontalCount <= 19.9) {
        position.horizontalCount += 0.3;
    }
    elem.style.left = `${position.horizontalCount}em`;
}

//передвижение влево
mario.moveLeft = function (elem) {
    if (position.horizontalCount >= 0.2) {
        position.horizontalCount -= 0.3;
    }
    elem.style.left = `${position.horizontalCount}em`;
}

//передвижение вниз
mario.moveDown = function (elem) {
    if (position.verticalCount <= 19.9) {
        position.verticalCount += 0.3;
    }
    elem.style.top = `${position.verticalCount}em`;
}

//передвижение вверх
mario.moveUp = function (elem) {
    if (position.verticalCount >= 0.3) {
        position.verticalCount -= 0.3;
    }
    elem.style.top = `${position.verticalCount}em`;
}

//создание бомб
mario.getBomb = function () {
    for (let i = 0; i < 5; i++) {
        let bomb = document.createElement('div');
        bomb.classList.add('.bomb')
        bomb.style.height = "2em";
        bomb.style.width = "2em";
        bomb.style.background = "url(image/bomb.png)";
        bomb.style.backgroundSize = 'contain';
        bomb.style.position = 'absolute';
        bomb.style.top = `${getRandomInt(24)}em`;
        bomb.style.left = `${getRandomInt(24)}em`;
        area.append(bomb);
    } 
}

appearence.addEventListener('click', () => { mario.app(marioStyle) });

buttonBomb.addEventListener('click', () => { mario.getBomb() });

document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowRight")
    mario.moveRight(marioStyle)
});

document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowLeft")
        mario.moveLeft(marioStyle)
});

document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowUp")
        mario.moveUp(marioStyle)
});

document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowDown")
        mario.moveDown(marioStyle)
});



let computedPositionTop = document.querySelectorAll('.bomb').offsetLeft;

//короче здесь хуйня в том что бы получить коллекцию бомб и к каждой из них в цикле получить offsetleft и offsettop, сравнивая с позицией игрока, но это пока не точно




