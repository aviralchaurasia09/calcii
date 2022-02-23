alert("Made by Aviral Chaurasia");

let a;
let b;
let ch;
let calculation;

var cal = document.getElementById("bttn");
cal.addEventListener("click", calcula);

function calcula() {
  a = document.getElementById("input1").value;
  b = document.getElementById("input2").value;
  ch = document.getElementById("input3").value;

  switch (ch) {
    case "+":
      calculation = parseInt(a) + parseInt(b);
      break;
    case "-":
      calculation = parseInt(a) - parseInt(b);
      break;
    case "*":
      calculation = parseInt(a) * parseInt(b);
      break;
    case "/":
      calculation = parseInt(a) / parseInt(b);
      break;
    case "%":
      calculation = parseInt(a) % parseInt(b);
      break;
    case "^":
      calculation = Math.pow(a, b);
      break;
    default:
      alert(
        "given operation in not belong to our operation please read the instruction carefully before calculation"
      );
      break;
  }
  document.getElementById("result").innerHTML = calculation;
}
