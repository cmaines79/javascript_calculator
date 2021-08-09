// Javascript Calculator
// This project is a project directed by The Odin Project - Fundimentals
// Created by Cordell Maines - MainesIndustries@gmail.com 
// Created 8/9/2021

// Global Variables
let displayValue = "";
let historyValue = "";
let operator = "";
let number1;
let number2;

// basic mathmatical functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){

}

// function to update the history
function updateHistory(number, operator){
    // getting DOM elements
    const historyEl = document.querySelector('.history');

    // checking to see if clear was pressed
    if(number == 'clear'){
        historyValue = '';
    } else {
        historyValue += (number + " " + operator);
    }

    // updating the innerHTML value of the hisotry display
    historyEl.innerHTML = historyValue;
}

// function to update the display value
function updateDisplayValue(digit){
    // getting DOM elements
    const currentEl = document.querySelector('.current');

    if(digit == 'clear'){
        // checking to see if clear was pressed
        displayValue = "";
    }else if(digit == 'delete'){
        // checking to see if delete was pressed
        displayValue = displayValue.substring(0, displayValue.length - 1);
    } else if(digit != '.'){
        // checking the character to make sure it's not a decimal
        displayValue += digit;
    } else if(digit == '.' && displayValue.indexOf('.') < 0){
        // checking to make sure we don't have multiple decimals
        displayValue += digit;
    } else {
        return
    }

    // updating the innerHTML value of the display
    currentEl.innerHTML = displayValue;    
}

// event listener for button clicks
const buttonListener = document.querySelector('.keyPad').addEventListener('click', function(e){
    // if the button is a number
    if(e.target.classList.contains('number')){
        updateDisplayValue(e.target.innerHTML);
    }

    // if the button is an operator
    if(e.target.classList.contains('operator')){
        if(number1 === undefined){
            number1 = displayValue;
            updateHistory(number1, e.target.innerHTML);
        }
    };

    // if the button is clear
    if(e.target.id == 'clear'){
        number1 = undefined;
        number2 = undefined;
        updateDisplayValue("clear");
        updateHistory('clear', 'clear');
    }

    // if the button is delete
    if(e.target.id == 'delete'){
        updateDisplayValue('delete');
    }
});

// numbers and operators work.  need to update number 2 and run arithamtic
