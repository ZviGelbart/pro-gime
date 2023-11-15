
function reduceQueue(){
    let queueNumber = document.getElementById("score");
    let numberOfqueueNumber = parseInt(queueNumber.innerText)
    let newQueue = numberOfqueueNumber - 1;
    queueNumber.innerText = newQueue;
}

function compareCards(cardsEqual){ //הפונקציה מעדכנת את הנקודות והיא מקבלת את הפונקציה שבודקת האם הקלפים שווים אם אמת מוסיפה אם שקר מורידה
    if (cardsEqual){
        let numPoint = document.getElementById("point");
        let parsPoint = parseInt(numPoint.innerText);
        let newPoint = parsPoint + 100;
        numPoint.innerText = newPoint;
    }else{
        let numPoint = document.getElementById("point");
        let parsPoint = parseInt(numPoint.innerText);
        let newPoint = parsPoint - 10;
        numPoint.innerText = newPoint;
    }
}


