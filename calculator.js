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

// Create Calculator DOM

let body = document.body;
let calcMain = document.createElement('div');
    calcMain.id = 'calc-case';
let calcDisplay = document.createElement('p');
    calcDisplay.id = 'display';
let calcBtnWrap = document.createElement('div');
    calcBtnWrap.id = 'btnWrapper';
let numberWrap = document.createElement('div');
    numberWrap.id = 'numberWrapper';
let opWrap = document.createElement('div');
    opWrap.id = 'opWrapper';

body.appendChild(calcMain);
calcMain.appendChild(calcDisplay);
calcDisplay.innerText = '0';
calcMain.appendChild(calcBtnWrap);
calcBtnWrap.appendChild(numberWrap);
calcBtnWrap.appendChild(opWrap);

for (let i = 9; i >= 0; i--) {

    let numberBtn = document.createElement('button');

    numberWrap.appendChild(numberBtn);
    numberBtn.classList = "number";
    numberBtn.id = "number" + i;
    numberBtn.innerText = i;
}

let operators = ["+", "-", "x", "÷", "="];

for (element of operators){
    
    let operatorBtn = document.createElement('button');
    
    opWrap.appendChild(operatorBtn);
    operatorBtn.classList = "operator";
    operatorBtn.id = "op" + element;
    operatorBtn.innerText = element;


}

let Variables = {
    firstNumber: undefined,
    operation: undefined,
    secondNumber: undefined,
}

let numbers = document.getElementsByClassName('number');

Variables.firstNumber = addEventListener("click", (event) =>{

}, (Variables.operation == undefined));

Variables.operation = addEventListener("click", (event) => {

}, );

Variables.secondNumber = addEventListener("click", (event) => {

}, );




