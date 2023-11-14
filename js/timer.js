
// הזמן בשניות
let countdown = 301;

// הפונקציה שתפעיל את הטיימר
function startTimer() {
    // התאריך והזמן הנוכחי
    let now = new Date().getTime();

    // הזמן הסופי שבו הטיימר יסתיים
    let endTime = now + countdown * 1000;

    // הפונקציה שמתבצעת בכל איטרציה של הטיימר
    function updateTimer() {
        // התאריך והזמן הנוכחי
        let currentTime = new Date().getTime();

        // הזמן הנותר עד לסיום הטיימר במילישניות
        let remainingTime = endTime - currentTime;

        // חישוב הדקות, השניות והמילישניות
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        let milliseconds = String(remainingTime % 1000).charAt(0); // תמיד שלוש ספרות

        // עדכון הטקסט ב-DOM
        document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${milliseconds}`;

        // בדיקה האם הטיימר הסתיים
        if (remainingTime <= 0) {
            clearInterval(timerInterval); // עצירת הטיימר
            document.getElementById('timer').innerText = "הטיימר הסתיים";
        }
    }

    // קריאה ראשונית לפונקציה לעדכון הטיימר
    updateTimer();

    // קביעת הפונקציה לקרוא כל 10 מילישניות
    let timerInterval = setInterval(updateTimer, 10);
}

// התחלת הטיימר בעת טעינת הדף
startTimer();