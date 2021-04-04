function calc() {
  const index = prompt("Калькулятор: 1) сложение, 2) вычитание, 3) умножение, 4) деление, 5)степень, 6)остаток"); 
  const a = prompt("a");
  const b = prompt("b");
  const result = {
    1 : +a + +b,
    2 : a - b,
    3 : a * b,
    4 : a / b,
    5 : a ** b,
    6 : a % b,
  }[index];
  return result == +result && result || "Wrong operation";
}
alert(calc());*/

var a = prompt("Enter your login: ");
var b = prompt("Enter your password: ");
if (a == "admin" && b == "12345"){
  alert('Welcome!')
}else if (a !="admin"){
  alert("Wrong Login!")
}else if(b !="12345"){
  alert("Wrong password!")
};
