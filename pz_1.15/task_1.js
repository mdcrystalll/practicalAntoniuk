function numberToObject(num) {
    if (num > 9999) {
      console.log('Число більше 9999');
      return {};
    }
  
    const units = num % 10;
    const tens = Math.floor(num / 10) % 10;
    const hundreds = Math.floor(num / 100) % 10;
    const thousands = Math.floor(num / 1000) % 10;
  
    const result = {
      'одиниці': units,
      'десятки': tens,
      'cотні': hundreds,
      'тисячі': thousands
    };
  
    return result;
  }