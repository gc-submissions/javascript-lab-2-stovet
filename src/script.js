"use strict";

// TODO - write your code here.

const randomDamage = () => {
    let number = Math.floor(Math.random() * 10) + 1
    console.log(number)
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round( Math.random() )
    return randNum === 0 ? opt1 : opt2;
}

function attackPlayer(health){
    return health-= randomDamage();
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

const isDead = (health) => {
    return health <= 0 ? true : false;
}
