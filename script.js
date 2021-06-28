const RPS= ["Rock", "Paper", "Scissors"];

function computerPlay(){
    const choice = Math.floor((Math.random()*3));
    return RPS[choice];
}

function playerPlay(){
    let input = prompt('Rock, Paper or Scissors?');
    choice=input.toUpperCase();
    switch(choice){
        case 'ROCK':return RPS[0];
                    break;
        case 'PAPER':return RPS[1];
                    break;
        case 'SCISSORS':return RPS[2];
                    break;
        default: return playerPlay();
    }
}
console.log(playerPlay());
