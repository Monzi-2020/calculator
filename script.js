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
    if(b == 0) {
        return("Error: Can't divive by 0");
    }
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
screen.textContent = "0"

const numbers = document.querySelectorAll('.button.num');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
    if(operator == undefined) {
        num1 += number.id;
        screen.textContent = num1;
        }
    else if(operator != undefined) {
        num2 += number.id;
        screen.textContent = num2;
        }}
    );
});

const opts = document.querySelectorAll('.button.opt');

opts.forEach((opt) => {
    opt.addEventListener('click', () => {
        if(num2 != 0) {
        let result = operate(num1,operator,num2)
        screen.textContent = result.toFixed(5);
        num1 = result;
        num2 = "";
        operator = opt.getAttribute("value");
        } 
        else if(num1 != 0) {
        operator = opt.getAttribute("value");
        }
    })
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () =>{
    let result = operate(num1,operator,num2)
    screen.textContent = result.toFixed(5);
    num1 = result;
    num2 = "";
})


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = undefined;
    screen.textContent = "0";
})

const back = document.querySelector('#back');
back.addEventListener('click', () => {
    if(num2 == ""){
    num1 = num1.substring(0, num1.length -1);
        screen.textContent = num1;
    } else {
        num2 = num2.substring(0, num2.length -1)
        screen.textContent = num2;
    }
})

const dot = document.querySelector('.button.dot');
dot.addEventListener('click', () => {
    if(operator == undefined) {
        if(num1 != "" && !num1.includes('.') ) {  
            num1 += '.';
            screen.textContent = num1;
        }}
    else if(num2 != "" && !num2.includes('.')){
        num2 += '.';
        screen.textContent = num2;
    }
    
})


// CSS effect below

numbers.forEach((number) => {
    number.addEventListener('mouseover', () => {
        number.setAttribute('style','background: #bed1df; font-size: 28px; ')
    })
    number.addEventListener('mouseout', () => {
        number.setAttribute('style','background: #dae9f4;')
    })
})

opts.forEach((opt) => {
    opt.addEventListener('mouseover', () => {
        opt.setAttribute('style','background: #95b5cc; font-size: 28px;')
    })
    opt.addEventListener('mouseout', () => {
        opt.setAttribute('style','background: #b4d1e6')
    })
})


const backColor = document.querySelectorAll('.backCo');
backColor.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.setAttribute('style','background: #305d73; font-size: 27px;')
    })
    btn.addEventListener('mouseout', () => {
        btn.setAttribute('style','background: #386d87;')
    })
})

clear.addEventListener('mouseover', () =>{
    clear.textContent = "Clear";
})
clear.addEventListener('mouseout', () =>{
    clear.textContent = "AC";
})

back.addEventListener('mouseover', () =>{
    back.textContent = "Delete";
})
back.addEventListener('mouseout', () =>{
    back.textContent = "DL";
})

