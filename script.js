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

function operate(a,cal,b){
    if(cal == '+') {
        return add(+a,+b);
    }
    else if(cal == '-') {
        return subtract(a,b);
    }
    else if(cal == '/') {
        return divide(a,b);
    }
    else if(cal == '*') {
        return multiply(a,b);
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
    else if(operator != undefined) {
        num2 += number.id;
        screen.textContent = num2;}}
    );
});

opts.forEach((opt) => {
    opt.addEventListener('click', () => {
        operator = opt.getAttribute("value");})
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () =>{
    const result = operate(num1,operator,num2);
    screen.textContent = result;
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = undefined;
    screen.textContent = "";
})

