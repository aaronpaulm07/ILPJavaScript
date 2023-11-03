let task = prompt("enter operation with +,-,/,* with space after each");
const calc = (task) => {
  const [num1, operator, num2] = task.split(" ");
  switch (operator) {
    case "+":
      return Number(num1) + Number(num2);
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
};
console.log(calc(task));
