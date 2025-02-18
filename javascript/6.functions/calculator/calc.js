document.addEventListener('DOMContentLoaded', function() {
    const nums = document.querySelectorAll(".nums");
    const operatorBtns = document.querySelectorAll(".btn-operator");
    let display = document.querySelector("#display");
    let history = document.querySelector("#history");
    

    let currentNumber = '0';
    let previousNumber = null;
    let selectedOperator = null;
    let newNumber = true;

    nums.forEach(button => {
        button.addEventListener('click', (e) => {
            const number = e.target.textContent;
            
            if (newNumber) {
                currentNumber = number;
                newNumber = false;
            } else {
                // Prevent multiple leading zeros
                if (currentNumber === '0' && number === '0') {
                    return;
                }
                
                
                if (currentNumber === '0' && number !== '0') {
                    currentNumber = number;
                } else {
                    
                    if (currentNumber.length < 16) {
                        currentNumber += number;
                    }
                }
            }
            
            display.textContent = currentNumber;
        });
    });

    // Handle operator buttons
    operatorBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const operator = e.target.textContent;
            
            
            if (previousNumber === null) {
                previousNumber = currentNumber;
                history.textContent = `${previousNumber} ${operator}`;
            } else {
                
                const result = calculate(
                    parseFloat(previousNumber), 
                    parseFloat(currentNumber), 
                    selectedOperator
                );
                
                previousNumber = result;
                history.textContent = `${result} ${operator}`;
            }
            
            selectedOperator = operator;
            newNumber = true;
        });
    });

   
    document.querySelector(".equals").addEventListener('click', () => {
        if (previousNumber !== null && selectedOperator !== null) {
            const result = calculate(
                parseFloat(previousNumber), 
                parseFloat(currentNumber), 
                selectedOperator
            );
            
            // Update history with complete expression
            history.textContent = `${previousNumber} ${selectedOperator} ${currentNumber} =`;
            display.textContent = result;
            
            // Reset for new calculation
            currentNumber = result;
            previousNumber = null;
            selectedOperator = null;
            newNumber = true;
        }
    });

    // Clear button
    document.querySelector(".clear").addEventListener('click', () => {
        currentNumber = '0';
        previousNumber = null;
        selectedOperator = null;
        newNumber = false;
        display.textContent = '0';
        history.textContent = '';
    });

   
    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '×':
            case '*':
                return num1 * num2;
            case '÷':
            case '/':
                return num2 !== 0 ? num1 / num2 : 'Error';
            default:
                return num2;
        }
    }
});



