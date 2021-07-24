import { drawSnake, updateSnake } from "./snake.js";
import { drawFood /*updateFood*/ } from "./food.js";
import { SNAKE_SPEED, GAMEBOARD_SIZE, GAMEBOARD } from './gameConfig.js'

let lastRended = 0;


GAMEBOARD.style.gridTemplateColumns = `repeat(${GAMEBOARD_SIZE}, 1fr)`;
GAMEBOARD.style.gridTemplateRows = `repeat(${GAMEBOARD_SIZE}, 1fr)`;

function main(currentTime) {
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRended) / 1000
    
    if (secondsSinceLastRender  < 1 / SNAKE_SPEED) return

    lastRended = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    GAMEBOARD.innerHTML = ''
    drawSnake(GAMEBOARD)
    drawFood(GAMEBOARD)
}