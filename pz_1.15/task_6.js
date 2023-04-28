function printCurrentTime() {
    const now = new Date(); // створення нового об'єкту Date з поточним часом
    const hours = now.getHours().toString().padStart(2, '0'); // години, наприклад "09"
    const minutes = now.getMinutes().toString().padStart(2, '0'); // хвилини, наприклад "15"
    const seconds = now.getSeconds().toString().padStart(2, '0'); // секунди, наприклад "56"
    const dayOfWeek = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"][now.getDay()]; // день тижня, наприклад "середа"
    const dayOfMonth = now.getDate().toString().padStart(2, '0'); // день місяця, наприклад "06"
    const month = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'][now.getMonth()]; // місяць, наприклад "травня"
    const year = now.getFullYear(); // рік, наприклад "2020"
    
    const formattedTime = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${dayOfMonth} ${month} ${year} року`;
    
    console.log(formattedTime);
    return formattedTime;
  }
  printCurrentTime();
// "09:15:56, середа, 06 травня 2020 року"