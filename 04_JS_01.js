// Задание 1, урок 4
// Функция, возвращающая объект с описанием состава числа
function parseNum2Str(num) {
  if (num < 0 || num > 999) {
    console.log("Введенное число не принадлежит диапазону [0-999]")
    return {};
  }
  let numbers = {
    hundreds: '',
    tens: '',
    units: '',
  }
  numbers.hundreds = parseInt(num / 100, 10);
  numbers.tens = parseInt((num % 100) / 10, 10);
  numbers.units = num % 10;
  return numbers;
}

let n = 437;
// let n = prompt("Введите целое число от 0 до 999:");
console.log(parseNum2Str(n));