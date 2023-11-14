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

  let arr = createArray(16);
  let mixedArr = shuffleArray(arr) //פה הוא משנה את המשתנה המערך המסודר ופשוט מפעיל על המשתנה של המערך המסודר את העירבוב ועכשיו המערך = מעורבב
  console.log(mixedArr);
  



