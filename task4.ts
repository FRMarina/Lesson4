const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";
const orderSymbolFirst: number = order.indexOf("#") + 1;
const oredrSymbolLast: number = order.indexOf(";");
const dateStartTrack: number = order.indexOf("=") + 1;
const dateEndTrack: number = order.indexOf(" ", dateStartTrack);
const getDate: string = order.slice(dateStartTrack, dateEndTrack);
const getTimeEnd: number = order.indexOf(";", dateEndTrack);
const getTime: string = order.slice(dateEndTrack + 1, getTimeEnd);
const getAmountStart: number = order.indexOf("=", getTimeEnd) + 1;
const orderLength: number = order.length;
const getDateElements = getDate.split("-");
const getTimeElements = getTime.split(":");
const getAmount: string = order.slice(getAmountStart, orderLength);
const orderNumber: string = order.slice(orderSymbolFirst, oredrSymbolLast);

console.log(
  `Заказ № ${orderNumber} от ${getDateElements[2]}/${getDateElements[1]}/${getDateElements[0]} ${getTimeElements[0]}:${getTimeElements[1]} на сумму ${getAmount} рублей`,
);
// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей
