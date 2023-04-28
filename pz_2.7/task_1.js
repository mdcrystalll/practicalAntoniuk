const fs = require('fs');
const csv = require('csv-parser');

// Запит шляху до csv-файлу
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введіть шлях до csv-файлу: ', (path) => {
  readline.close();

  // Перевірка існування файлу
  if (!fs.existsSync(path)) {
    console.log('Файл не знайдено.');
    return;
  }

  // Перевірка формату файлу
  if (!path.endsWith('.csv')) {
    console.log('Файл не є csv-файлом.');
    return;
  }

  // Читання csv-файлу та створення масиву об'єктів
  const results = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Збереження результату у файлі формату .js з такою ж назвою, як вхідний файл
      const jsPath = path.replace('.csv', '.js');
      const jsData = `const data = ${JSON.stringify(results)};\nmodule.exports = { data };`;
      fs.writeFileSync(jsPath, jsData);
      console.log(`Результат збережено у файлі ${jsPath}.`);
    });
});