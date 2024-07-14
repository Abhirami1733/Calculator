        let displayValue = '';
        let currentOperation = null;
        let firstOperand = null;

        function appendNumber(number) {
            displayValue += number;
            updateDisplay();
        }

        function setOperation(operation) 
        {
            if (displayValue === '') 
                return;
            if (firstOperand === null) 
            {
                firstOperand = parseFloat(displayValue);
            } 
            else if (currentOperation) 
            {
                calculateResult();
            }
            currentOperation = operation;
            displayValue = '';
        }

        function calculateResult() {
            if (currentOperation === null || displayValue === '') return;
            const secondOperand = parseFloat(displayValue);
            let result;
            switch (currentOperation) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }
            displayValue = result.toString();
            updateDisplay();
            firstOperand = result;
            currentOperation = null;
        }

        function clearDisplay() {
            displayValue = '';
            currentOperation = null;
            firstOperand = null;
            updateDisplay();
        }

        function updateDisplay() {
            const display = document.getElementById('display');
            display.value = displayValue;
        }