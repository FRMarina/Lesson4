const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем, если имя не совпадает, то заменить его

const yourName: string = "Marina";
// Вариант 1
/*
if (text.includes(name === yourName)) {
  console.log(text.toLowerCase());
} else {
  console.log(text.replace(name, yourName));
}
*/

//Вариант 2
if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const firstNameIndex: number = text.indexOf(name);
  const lastNameIndex: number = firstNameIndex + name.length;
  const lastTextAfterName = text.slice(lastNameIndex);
  const newText: string = text.slice(0, firstNameIndex).concat(yourName).concat(lastTextAfterName);
  console.log(newText.toLowerCase());
}
