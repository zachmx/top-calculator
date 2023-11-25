function add(a, b){
     return (a + b);

}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, a, b){
    switch (operator){
        case add:
            console.log(add(a, b));
            break
        case subtract:
            console.log(subtract(a, b));
            break
        case multiply:
            console.log(multiply(a, b));
            break
        case divide:
            console.log(divide(a, b));
            break
    }
}

let buttonWrapper = document.getElementById('button-wrapper');



let currentValue = buttonWrapper.addEventListener('click', (event) => {

    const isButton = event.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    } else {

        let calcDisplay = document.getElementById('display');
        let prevSelection = calcDisplay.innerText;
        let currentSelection = event.target.innerText;

        let isNumber = parseInt(currentSelection);



            if (calcDisplay.innerText == '0'){
                calcDisplay.innerText = currentSelection; 

            } else if (isNumber) {

                calcDisplay.innerText = prevSelection +  event.target.innerText;
                
            } else if (!isNumber && currentSelection != "=") {

                let firstNumber = calcDisplay.innerText;
                let operator = currentSelection;

                calcDisplay.innerText = firstNumber + " " + operator + " ";
                
            } else if (currentSelection == "="){

            }
    
        
        // calcDisplay.innerText = currentSelection + prevSelection;

    }
})
