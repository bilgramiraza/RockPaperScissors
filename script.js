const RPS= ["Rock", "Paper", "Scissors"];

function computerPlay(){
    const choice = Math.floor((Math.random()*3));
    return RPS[choice];
}
