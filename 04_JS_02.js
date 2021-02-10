// Задание 2, урок 4

// Корзина, вариант 3. Исправлено в соответствии с рекомендациями.
myCart = {  
  products: [
    {
      product: 'scissors',
      price: 350,
      quantity: 2,
    },
    {
      product: 'paints',
      price: 200,
      quantity: 1,
    },
    {
      product: 'paper',
      price: 100,
      quantity: 3
    },
  ],
  getSum(){
    let sum = 0;
    for(i = 0; i < this.products.length; i++) {
      sum += this.products[i].price * this.products[i].quantity;
   }
    return sum;
  },
}

console.log(myCart.getSum());

// Корзина, вариант 2. 
// Наблюдается избыточность кода, но вроде как это в текущей ситуации неизбежно
// Зато так уже веселее выглядит :)
const cart = [
  {
    product: 'scissors',
    price: 350,
    quantity: 2,

    mySum() {
      return this.price * this.quantity;
      },
  },
  {
    product: 'paints',
    price: 200,
    quantity: 1,
    
    mySum() {
      return this.price * this.quantity;
      },
  },
  {
    product: 'paper',
    price: 100,
    quantity: 3,
    
    mySum() {
      return this.price * this.quantity;
      },
  }
]
let sum = 0;
for(i = 0; i < cart.length; i++) {
  sum += cart[i].mySum();
}
console.log(sum);


// Корзина, вариант 1 (без дублирования кода, но и без методов)
// const cart = [
//   {
//     product: 'scissors',
//     price: 350,
//     quantity: 2
//   },
//   {
//     product: 'paints',
//     price: 200,
//     quantity: 1
//   },
//   {
//     product: 'paper',
//     price: 100,
//     quantity: 3
//   }
// ]
// let sum = 0;
// for(i = 0; i < cart.length; i++) {
//   sum_i = cart[i].price * cart[i].quantity;
//   sum += sum_i;
// }
// console.log(sum);