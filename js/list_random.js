let number_of_cards = 50;

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

    if (firstCard.textContent === clickedCard.textContent) {
      console.log("הכרטיסים זהים!");
      compareCards(true)
      resetBoard();
    } else {
      setTimeout(() => {
        firstCard.classList.add("hidden");
        firstCard.classList.remove("overt");
        clickedCard.classList.add("hidden");
        clickedCard.classList.remove("overt");
        compareCards(false)
        resetBoard();
      }, 1000);
    }
  }
}

function resetBoard() {
  [firstCard, lockBoard] = [null, false];
}

document.getElementById("the_body_of_the_game").addEventListener("click", cardClicked);
