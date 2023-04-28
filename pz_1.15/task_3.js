function countVowelsAndConsonants(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
  
    // Розділяємо текст на слова та обробляємо кожне слово окремо
    text.split(' ').forEach((word) => {
      // Перевіряємо першу літеру слова на належність до голосних або приголосних
      const firstLetter = word.charAt(0).toLowerCase();
      if (vowels.includes(firstLetter)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    });
  
    // Створюємо та повертаємо об'єкт з результатами
    const result = {
      текст: text,
      голосних: vowelCount,
      приголосних: consonantCount,
    };
    return result;
  }
  
  // Приклад виклику функції
  const text = 'Different text or what else';
  const result = countVowelsAndConsonants(text);
  console.log(result);