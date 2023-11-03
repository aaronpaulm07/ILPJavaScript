// let task = prompt("enter operation with +,-,/,* with space after each");
// const calc = (task) => {
//   const [num1, operator, num2] = task.split(" ");
//   switch (operator) {
//     case "+":
//       return Number(num1) + Number(num2);
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//   }
// };
// console.log(calc(task));

//array
// f = ["apple", "asdf"];

// const num = [1, 2, 3, 4, 5];

// const sum = (args) => {
//   console.log(args);
//   console.log(typeof args);
// };
// sum(num);

// const numbers = [1, 2, 3, 4, 5];

// const sum = (args) => {
//   let sum = 0;
//   args.map((element) => (sum += element));
//   console.log(sum);
// };
// sum(numbers);

// console.log([10, 3, 1, 5].sort());

// console.log([10, 3, 1, 5].sort((a, b) => a - b));

//OBJECTS

let user1 = {
  name: "sss",
  age: 30,
};

user1.name = promt("enter name");
console.log(user1.name + " hi");
