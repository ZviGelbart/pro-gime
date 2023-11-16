let number_of_cards = 40;

// Function to create and mix array
function createArray(number) {
  let newNumber = number / 2;
  let firstList = [];
  for (let i = 1; i <= newNumber; i++) {
    firstList.push(i);
    firstList.push(i);
  }

  return firstList;
}


// Function to shuffle array הפונקציה מערבבת את המערך המוקרי בפונקציה הראשונה ומחיזרה אותו כבר מעורבב
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  
  // Example usage

let arr = createArray(number_of_cards);
let mixedArr = shuffleArray(arr) //פה הוא משנה את המשתנה המערך המסודר ופשוט מפעיל על המשתנה של המערך המסודר את העירבוב ועכשיו המערך = מעורבב
console.log(mixedArr)

function makeTheTable(mixedArr) {
  let column  = 0;
  if (mixedArr.length === 36) {
    column = 6;
  }
  else if (mixedArr.length === 50) {
    column = 10;
  }
  else if (mixedArr.length === 40) {
    column = 8;
  }
  let column_counter = 0;
  let tableHTML  = "<table><tr>";


  for (let i of mixedArr) {
    tableHTML += `<td class="hidden" name="${i}"> ${i} </td>`;
    column_counter += 1;
    if (column_counter === column) {
      tableHTML += `</tr><tr>`;
      column_counter = 0;

    }

  }
  tableHTML += "</tr></table>";
  document.getElementById("the_body_of_the_game").innerHTML = tableHTML;
  document.getElementById("the_body_of_the_game").style.width = "fit-content";
  document.getElementById("the_body_of_the_game").style.margin = "0 auto"; // זה יכניס את הטבלה באמצע של הדף


}
makeTheTable(mixedArr)

let firstCard = null;
let lockBoard = false;
 
function cardClicked(event) {
  if (lockBoard) return;

  let clickedCard = event.target;


  if (!clickedCard.classList.contains("hidden")) {
    return;
  }

  clickedCard.classList.remove("hidden");
  clickedCard.classList.add("overt");

  if (firstCard === null) {
    firstCard = clickedCard;
  } else {
    lockBoard = true;
    var audio_true = new Audio('http://www.oxeyegames.com/files/dm_examples/simplebreak/bounce.wav');
    var audio_false = new Audio('http://www.oxeyegames.com/files/dm_examples/simplebreak/break.wav');
    if (firstCard.textContent === clickedCard.textContent) {
      firstCard.classList.add("set");
      firstCard.classList.remove("overt");
      clickedCard.classList.add("set");
      clickedCard.classList.remove("overt");
      console.log("הכרטיסים זהים!");
      audio_true.play();
      compareCards(true)
      reduceRound()
      resetBoard();
      


    } else {
      setTimeout(() => {
        audio_false.play()
        firstCard.classList.add("hidden");
        firstCard.classList.remove("overt");
        clickedCard.classList.add("hidden");
        clickedCard.classList.remove("overt");
        compareCards(false)
        reduceRound()
        resetBoard();
      }, 1000);
    }
  }
}


function resetBoard() {
  [firstCard, lockBoard] = [null, false];
}

document.getElementById("the_body_of_the_game").addEventListener("click", cardClicked);

let game_over = document.querySelector('.the_game');
let The_head_is_hidden = document.querySelector('.head_of_the_game');
let The_win_is_hidden = document.querySelector('.win');
function end_the_game() {
  document.getElementById("sum_points").innerHTML = document.getElementById('point').innerText
  document.getElementById("sum_rounds").innerHTML = document.getElementById('score').innerText
  document.getElementById("sum_timer").innerHTML = document.getElementById('timer').innerText
  // firstCard.classList.add("hidden");
  The_head_is_hidden.classList.add('head_is_hidden');
  The_win_is_hidden.classList.remove('none');
  game_over.classList.add("game_over_1");
  game_over.classList.add("game_over_message");


}
