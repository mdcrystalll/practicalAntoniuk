function getExt(filePath) {
    // Розділяємо шлях на частини, використовуючи роздільник "/"
    const parts = filePath.split('/');
    // Отримуємо останній елемент масиву - назву файлу
    const fileName = parts[parts.length - 1];
    // Розділяємо назву файлу на частини, використовуючи роздільник "."
    const nameParts = fileName.split('.');
    // Отримуємо останній елемент масиву - розширення файлу
    const ext = nameParts[nameParts.length - 1];
    return ext;
  }
  
  // Приклад використання функції
  const filePath = '/home/user/main.js';
  const ext = getExt(filePath);
  console.log(ext); // виведе "js"