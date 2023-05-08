// console.log('Hello!');

// // Cách 1 Khai báo mảng
// let users = ['abc1', 'test', 12]; //n=3, Vị trí phần tử: 0-1-2
// console.log(users);

// // Cách 2 Khai báo mảng
// let points = new Array('abc2', 123, 12, 098); //n=4, Vị trí phần tử: 0-1-2-3
// console.log(points);

// users[3] = 'thay the'; // Thay thế 1 phần tử trong Mảng
// console.log(users);

// for (let index in users) {
//   console.log(index, users[index]);
// }

// for (let index = 0; index < users.length; index++) {
//   console.log(index, users[index]);
// }

// // THÊM phần tử vào CUỐI MẢNG
// let fruits = ['Banana', 'Orange'];
// console.log(fruits.length, fruits);
// fruits.push('Thêm vào 1');
// console.log(fruits.length, fruits);
// fruits [fruits.length] = 'Thêm vào 2'
// console.log(fruits.length, fruits);

// // Chuyển Mảng thành Chuỗi
// let fruits = ['Banana', 'Orange'];
// console.log(fruits.length, fruits);
// let fString = fruits.join(', ');
// document.write(fString);

// // Đảo ngược Mảng (từ banana, orange thành orange, banana)
// let fruits = ['Banana', 'Orange'];
// let a = fruits.reverse();
// console.log(fruits, a);

// // Sắp xếp các phần từ của Mảng (từ 0->9, sau đó từ a->z)
// let fruits = ['Banana', 'Orange', 'Apple', 1, 4, 3];
// fruits.sort();
// document.write(fruits.join(', '));

// // Thêm 1 phần từ ở đầu Mảng
// let fruits = ['Banana', 'Orange'];
// fruits.unshift('apple');
// document.write(fruits.join(', '));

// // Xóa 1 phần từ ở đầu Mảng
// let fruits = ['Banana', 'Orange', 'Apple'];
// fruits.shift();
// document.write(fruits);

// // Xóa phần tử trong Mảng (không mất vị trí)
// let fruits = ['Banana', 'Orange', 'Apple'];
// delete fruits[1];
// document.write(fruits);

// // Mẳng 2 chiều
// let fruits = [[2, 3, 5], 'Banana', 'Orange', 'Apple'];
// console.log(fruits);
// let fruits1 = [[2, 3, 5], 'Banana', 'Orange', 'Apple'];
// console.log(fruits1[0][2]);

//let fruits = [[2, 3, 5][('Banana', 'Orange', 'Apple')]];
// for (let index = 0; index < fruits.length; index++) {
//   let child = fruits[index];
//   for (let indexChild = 0; indexChild < child.length; indexChild++) {
//     console.log(child[indexChild]);
//   }
// }

let fruits = [
  [2, 3, 5],
  ['Banana', 'Orange', 'Apple'],
];
console.log(fruits);
for (let index in fruits) {
  let child = fruits[index];
  for (let indexChild in child) {
    console.log(child[indexChild]);
  }
}
