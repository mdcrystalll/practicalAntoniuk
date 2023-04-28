function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 101);
    let attempts = 0;
  
    while (true) {
      const guess = prompt("Введіть число від 0 до 100:");
  
      if (guess === null) {
        return alert("Гра скасована!");
      }
  
      const parsedGuess = parseInt(guess);
      if (isNaN(parsedGuess) || parsedGuess < 0 || parsedGuess > 100) {
        alert("Будь ласка, введіть коректне число!");
        continue;
      }
  
      attempts++;
      if (parsedGuess === randomNumber) {
        alert(`Ви вгадали число ${randomNumber} за ${attempts} спроб!`);
        const playAgain = confirm("Бажаєте зіграти ще раз?");
        if (playAgain) {
          guessNumber();
        } else {
          return;
        }
      } else {
        const distance = Math.abs(parsedGuess - randomNumber);
        let message;
        if (distance < 10) {
          message = "Дуже гаряче!";
        } else if (distance < 20) {
          message = "Гаряче!";
        } else if (distance < 30) {
          message = "Тепло!";
        } else if (distance < 50) {
          message = "Холодно!";
        } else {
          message = "Дуже холодно!";
        }
        console.log(`${new Date().toLocaleString()} Спроба ${attempts}: число ${parsedGuess} – ${message}`);
      }
    }
  }
  
  guessNumber();