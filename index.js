document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('calcForm');
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              calculate();
            });
          });
          
          function calculate() {
            const num1 = parseFloat(document.getElementById('number1').value);
            const num2 = parseFloat(document.getElementById('number2').value);
            const operation = document.getElementById('operation').value;
            let result;
          
            if (isNaN(num1) || isNaN(num2)) {
              result = 'Please enter valid numbers.';
            } else {
              switch (operation) {
                case 'add':
                  result = num1 + num2;
                  break;
                case 'subtract':
                  result = num1 - num2;
                  break;
                case 'multiply':
                  result = num1 * num2;
                  break;
                case 'divide':
                  result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                  break;
                default:
                  result = 'Invalid operation';
              }
            }
          
                document.getElementById('modalResult').textContent = result;
              const modal = new bootstrap.Modal(document.getElementById('resultModal'));
              modal.show();
          }