

function add(a, b){

    let numA = parseInt(a);
    let numB = parseInt(b);

     return (numA + numB);

}

function subtract(a, b){

    let numA = parseInt(a);
    let numB = parseInt(b);

    return (numA - numB);
}

function multiply(a, b){

    let numA = parseInt(a);
    let numB = parseInt(b);

    return (numA * numB);
}

function divide(a, b){

    let numA = parseInt(a);
    let numB = parseInt(b);

    return (numA / numB);
}

function operate(operator, a, b){
    switch (operator){
        case "+":
            console.log(add(a, b));
            break
        case "-":
            console.log(subtract(a, b));
            break
        case "x":
            console.log(multiply(a, b));
            break
        case "÷":
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

    if (element == "="){
        operatorBtn.id = "=";
    } else {
        operatorBtn.id = "op" + element;
    }

    operatorBtn.innerText = element;


}

let Variables = {
    firstNumber: undefined,
    operation: undefined,
    secondNumber: undefined,
}

let numbers = document.getElementsByClassName('number');

addEventListener("click", (event) =>{
    
    let currentBtn = event.target;

    if (currentBtn.classList == 'number' && calcDisplay.innerText == '0' && Variables.operation == undefined) {
        Variables.firstNumber = currentBtn.innerText;
        calcDisplay.innerText = Variables.firstNumber;
    } else if (currentBtn.classList == "number" && Variables.operation == undefined){
        Variables.firstNumber = Variables.firstNumber + currentBtn.innerText;
        calcDisplay.innerText = Variables.firstNumber;
    }    
    
});

addEventListener("click", (event) => {

    let currentBtn = event.target;

    if (currentBtn.classList == 'operator' && currentBtn.id != "="){
        Variables.operation = currentBtn.innerText;
        calcDisplay.innerText = Variables.firstNumber + " " + Variables.operation;
    }

}, );

addEventListener("click", (event) => {

    let currentBtn = event.target;

    if (currentBtn.classList == 'number' && Variables.operation != undefined){
        Variables.secondNumber = currentBtn.innerText;
        calcDisplay.innerText = Variables.firstNumber + " " + Variables.operation + " " + Variables.secondNumber;
    }

}, );

addEventListener("click", (event) => {

    let currentBtn = event.target;
    
    if (currentBtn.id == "=") {
        operate(Variables.operation, Variables.firstNumber, Variables.secondNumber);
    }
}, );



