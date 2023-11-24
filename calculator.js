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

buttonWrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else {
        let calcDisplay = document.getElementById('display');
        let currentSelection = event.target.innerText;

        let isNumber = parseInt(currentSelection);

        if (isNumber && (operator == undefined)){
            if (firstNumber == undefined){
                let firstNumber = currentSelection;
                console.log(firstNumber + "first");
            } else {
                let firstNumber = firstNumber + currentSelection;
                console.log(firstNumber + "second");
            }
        }
     
        calcDisplay.innerText = currentSelection;
        
        //if ( == Number){
        //        console.log('test- its a number');
        //    
        //}
    }
})
