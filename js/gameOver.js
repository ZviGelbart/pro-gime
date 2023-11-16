function endGame(){
   
    let time = document.getElementById('timer').innerText
    // let point = document.getElementById('point').innerText
    // let level = document.getElementById('score').innerText
    if (time === "00"){
        
        end_the_game();
    }else{
        return;
    }
}
setTimeout(endGame,1000)
