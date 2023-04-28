const path = require('path');

// Отримання шляху з аргументів командного рядка
const inputPath = process.argv[2];

// Отримання повного шляху
const fullPath = path.resolve(inputPath);

// Отримання імені файлу
const fileName = path.basename(fullPath);

// Отримання розширення файлу
const extension = path.extname(fullPath);

// Отримання виду операційної системи
const osType = process.platform === 'win32' ? 'Windows' : 'Unix';

// Виведення результатів
console.log(`Повний шлях: ${fullPath}`);
console.log(`Ім'я файлу: ${fileName}`);
console.log(`Розширення файлу: ${extension}`);
console.log(`Операційна система: ${osType}`);

//node task_3.js C:\Users\PaukShniuk\Desktop/3.6.txt