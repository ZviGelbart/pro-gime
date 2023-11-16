function reduceRound() {
  let RoundNumber = document.getElementById("score");
  let numberOfRoundNumber = parseInt(RoundNumber.innerText);
  if (numberOfRoundNumber > 0) {
    let newRound = numberOfRoundNumber - 1;
    RoundNumber.innerText = newRound;
    return true;
  } else {
    end_the_game();
  }
}

function compareCards(cardsEqual) {
  //הפונקציה מעדכנת את הנקודות והיא מקבלת את הפונקציה שבודקת האם הקלפים שווים אם אמת מוסיפה אם שקר מורידה
  if (cardsEqual) {
    let numPoint = document.getElementById("point");
    let parsPoint = parseInt(numPoint.innerText);
    let newPoint = parsPoint + 100;
    numPoint.innerText = newPoint;
    let score = document.getElementById("score");
    let numScore =parseInt(score.innerText);
    let newRuond = numScore +2;
    score.innerText = newRuond;

  } else {
    let numPoint = document.getElementById("point");
    let parsPoint = parseInt(numPoint.innerText);
    let newPoint = parsPoint - 10;
    if(newPoint > 0){
      numPoint.innerText = newPoint;
    }else{
      end_the_game();
    }
  }
}

