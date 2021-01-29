const cart = [
  ["scissors", 350, 2],
  ["paints", 200, 1],
  ["paper", 100, 3]
]
let sum = 0;
for(i = 0; i < cart.length; i++) {
  sum_i = cart[i][1] * cart[i][2];
  sum += sum_i;
}
console.log(sum);
 
// Ниже - попытка решить через reduce, к сожалению не совсем нужный
// результат получил: выводится полностью первый элемент массива и уже
// только после этого к нему прибавляются результаты вычислений по следующим
// позициям.

// let total = cart.reduce(function(pv, cv) {
//   return pv + (cv[1] * cv[2]);
// });
// console.log(total);