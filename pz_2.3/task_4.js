const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function game() {
    const random = Math.floor(Math.random() * 2) + 1; // випадкове число 1 або 2
    readline.question('Введіть 1 для "Орла" або 2 для "Решки": ', answer => {
      if (answer === '1' || answer === '2') {
        if (Number(answer) === random) {
          console.log('Ви виграли!');
        } else {
          console.log('Ви програли!');
        }
      } else {
        console.log('Введіть коректну відповідь.');
        game(); // рекурсивний виклик, щоб запустити гру знову
      }
      readline.close();
    });
  }
  
  console.log('Гра "Орел або решка"');
  console.log('Виберіть 1 або 2.');
  game();