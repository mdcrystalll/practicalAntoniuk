function validateEmail(email) {
    // Шаблон регулярного виразу для перевірки email-у
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Перевірка email-у з використанням регулярного виразу
    return pattern.test(email);
  }
  
  // Приклад виклику функції для перевірки email-у
  const email = 'test@test.test';
  const isValidEmail = validateEmail(email);
  console.log(isValidEmail);