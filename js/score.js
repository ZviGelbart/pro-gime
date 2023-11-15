function reduceRound() {
  let RoundNumber = document.getElementById("score");
  let numberOfRoundNumber = parseInt(RoundNumber.innerText);
  if (numberOfRoundNumber > 0) {
    let newRound = numberOfRoundNumber - 1;
    RoundNumber.innerText = newRound;
    return true;
  } else {
    return false;
  }
}

function compareCards(cardsEqual) {
  //הפונקציה מעדכנת את הנקודות והיא מקבלת את הפונקציה שבודקת האם הקלפים שווים אם אמת מוסיפה אם שקר מורידה
  if (cardsEqual) {
    let numPoint = document.getElementById("point");
    let parsPoint = parseInt(numPoint.innerText);
    let newPoint = parsPoint + 100;
    numPoint.innerText = newPoint;
    numberOfRoundNumber = +1
  } else {
    let numPoint = document.getElementById("point");
    let parsPoint = parseInt(numPoint.innerText);
    let newPoint = parsPoint - 10;
    numPoint.innerText = newPoint;
  }
}
let b =5