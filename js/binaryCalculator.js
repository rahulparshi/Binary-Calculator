const btns = document.querySelector("#btns");
const res = document.querySelector("#res");
let op1, op2, operator, result;

function calculate(text) {
  text = text.split(operator);
  op1 = Number.parseInt(text[0], 2);
  op2 = Number.parseInt(text[1], 2);
  switch (operator) {
    case "+":
      result = op1 + op2;
      break;
    case "-":
      result = op1 - op2;
      break;
    case "*":
      result = op1 * op2;
      break;
    case "/":
      result = Number.parseInt(op1 / op2);
      break;
  }

  return (+result).toString(2);
}

const operators = ["+", "-", "*", "/"];
btns.addEventListener("click", function(e) {
  const char = e.target.innerHTML;

  if (char === "C") {
    res.innerHTML = "";
    operator = null;
    document.querySelectorAll(".operator").forEach(btn => {
      btn.disabled = false;
    });
  } else if (char === "=") {
    res.innerHTML = calculate(res.innerHTML);
    document.querySelectorAll(".operator").forEach(btn => {
      btn.disabled = false;
    });
  } else {
    if (operators.includes(char)) {
      operator = char;
      document.querySelectorAll(".operator").forEach(btn => {
        btn.disabled = true;
      });
    }
    res.innerHTML += char;
  }
});
