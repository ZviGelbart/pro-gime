// בקובץ startNewGame.js
function startNewGame() {
    // יצירת משחק חדש כאן - לפי הצורך שלך
    let arr = createArray(50);
    let mixedArr = shuffleArray(arr);
    makeTheTable(mixedArr);
  
    // הסתרת הפיסקה והכפתור
    document.querySelector("p").style.display = "none";
    document.querySelector("button").style.display = "none";
  
    // הוספת פעולת click לכל תא בטבלה
    document.getElementById("the_body_of_the_game").addEventListener("click", cardClicked);
  }
  
  // בקובץ endGame.js
  function endGame() {
    // יצירת פיסקה
    const paragraph = document.createElement("p");
    paragraph.textContent = "המשחק הסתיים!";
    
    // יצירת כפתור
    const button = document.createElement("button");
    button.textContent = "התחל משחק חדש";
    button.addEventListener("click", startNewGame);
    
    // טיפול ב-body
    const body = document.body;
    body.innerHTML = ""; // נטש את כל התוכן הקיים ב-body
    
    // הוספת הפיסקה והכפתור ל-body
    body.appendChild(paragraph);
    body.appendChild(button);
  }
  
  // בקובץ הראשי
  // קריאה לפונקציה endGame
  