const mario = {};
const position = {};
const marioStyle = document.querySelector(".mario-style");
const appearence = document.querySelector('.appearence');
position.horizontalCount = 0;
position.verticalCount = 0;

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


appearence.addEventListener('click', () => { mario.app(marioStyle) });

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

//comment 1