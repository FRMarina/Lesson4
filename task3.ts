//Вывести сегодняшнюю дату в формате:
//День/Месяц/Год Часы:Минуты:Секунду - Например 02/05/2026 22:15:30
const date = new Date();
const day = date.getDate().toString().padStart(2, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
