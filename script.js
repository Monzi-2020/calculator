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

let num1 = "";
let operator;
let num2 = "";

const screen = document.querySelector('#screen');

const numbers = document.querySelectorAll('.button.num');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
    if(operator == undefined) {
        num1 += number.id;
        screen.textContent = num1;
        }
    else if(operator != undefined) {
        screen.textContent = "";
        num2 += number.id;
        screen.textContent = num2;
        num1 = operate(num1,operator,num2)
        }}
    );
});

const opts = document.querySelectorAll('.button.opt');
const equal = document.querySelector('#equal');
opts.forEach((opt) => {
    opt.addEventListener('click', () => {
        operator = opt.getAttribute("value");
        if(num2 != 0) {
        screen.textContent = num1;
        num2 = "";}
    })
})

equal.addEventListener('click', () =>{
    screen.textContent = num1;
    num2 = "";
})


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = undefined;
    screen.textContent = "";
})

