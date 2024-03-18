"use strict"

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let num1 = "";
let operator;
let num2 = "";

function operate(num1,operator,num2){
    if(operator == '+') {
        add(num1,num2)
    }
    else if(operator == '-') {
        subtract(num1,num2)
    }
    else if(operator == '/') {
        divide(num1,num2)
    }
    else if(operator == '*') {
        multiply(num1,num2);
    }
}

const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.button.num');
const opts = document.querySelectorAll('.button.opt');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
    if(operator == undefined) {
        num1 += number.id;
        screen.textContent = num1;
        }
    });
});

opts.forEach((opt) => {
    opt.addEventListener('click', () => {
        operator = opt.getAttribute("value");
        
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
        num2 += number.id;
        screen.textContent = num2;})})
    })
})
    

const equal = document.querySelector('#equal');
equal.addEventListener('click', () =>{
    console.log([num1,operator,num2]);
    const result = operate(num1,operator,num2);
    screen.textContent = result;
})