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

let arr = createArray(50);
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
    tableHTML += `<td class="hidden" name="${i}" style="width:150px; padding:4%;"> ${i} </td>`;
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
// פונקציה שמתבצעת כאשר תא נלחץ
function cardClicked(event) {
  // נקבל את התא שנלחץ
  let clickedCard = event.target;

  // בדיקה האם התא שנלחץ כבר נפתח
  if (!clickedCard.classList.contains("hidden")) {
    // אם כן, ייצא מהפונקציה
    return;
  }

  // הסרת ה-class "hidden"
  clickedCard.classList.remove("hidden");
  clickedCard.classList.add("overt");

  // נוסיף כאן פעולות נוספות שתרצה לבצע כאשר כרטיס נלחץ
}

// הוספת אירוע click לכל תא בטבלה
document.getElementById("the_body_of_the_game").addEventListener("click", cardClicked);
