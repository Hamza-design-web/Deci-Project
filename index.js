var num1, num2, operation, answer;


window.alert('valid operations are +,-,*,/');
num1 = Number(window.prompt('enter the first number'));
num2 = Number(window.prompt('enter the second number'));
operation = window.prompt('enter the operation');
if (operation == '+') {
  answer = num1 + num2;
} else if (operation == '-') {
  answer = num1 - num2;
} else if (operation == '*') {
  answer = num1 * num2;
} else if (operation == '/') {
  answer = num1 / num2;
} else {
  window.alert('Invalid operation ');
}
window.alert([num1,operation,num2,'=',answer].join(''));