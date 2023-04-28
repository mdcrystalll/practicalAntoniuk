function countWords(text) {
    // регулярний вираз, який зберігає лише літери та апострофи (для англійської мови)
    const regex = /[a-zA-Z']+/g;
    const words = text.match(regex); // масив слів з тексту
    const wordCount = {}; // об'єкт для зберігання частоти слів
    
    // збільшуємо лічильник для кожного слова в об'єкті wordCount
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase(); // перетворюємо на нижній регістр
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
    
    return wordCount;
 


  }
  const text = "Lorem ipsum dolor sit amet, sit consectetur adipiscing elit."

const wordCount = countWords(text);
console.log(wordCount);