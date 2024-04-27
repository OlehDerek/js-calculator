function clearDisplay() {
  document.getElementById('display').value = '0';
 
}

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
  var displayValue = document.getElementById('display').value;
  var result;
  var match = displayValue.match(/([\d.]+)([*/+-])([\d.]+)/);
// make that erase zero
// no double dots
// more digits in display

  if (match) {
      var operand1 = parseFloat(match[1]);
    var op = operand1.toString();

    if (op.length > 1 && op[1]!= ".") {
      op.shift();
    }
      var operator = (match[2]);
      var operand2 = parseFloat(match[3]);

      switch (operator) {
          case '+':
              result = operand1 + operand2;
              break;
          case '-':
              result = operand1 - operand2;
              break;
          case '*':
              result = operand1 * operand2;
              break;
          case '/':
              result = operand1 / operand2;
              break;
          default:
              result = 'Error';
      }
  }
  
  else {
    result = 'Error';
 }

  document.getElementById('display').value = result;
}
