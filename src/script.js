

// TODO - write your code here.

const randomDamage = () => {
    let number = Math.floor(Math.random() * 10) + 1
    return number;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.round( Math.random() )
    return randNum === 0 ? opt1 : opt2;
}

function attackPlayer(health){
    health = health - randomDamage();
    return health;
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

const isDead = (health) => {
    if(health <= 0){
        return true;
    } else return false;
}

function fight(player1, player2, player1Health, player2Health){
    while(true){
        let attacker = chooseOption(player1, player2)
        if(attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health) === true){
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health)
            logHealth(player1, player1Health);
            if(isDead(player1Health) === true){
                logDeath(player2, player1);
                break;
            }
        }
    }
}