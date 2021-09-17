// Variables //

let bill = 0;
let tip = 0;
let people = 0;

// Inputs & Outputs //

let billInput = document.querySelectorAll('.gen-input')[0];
let tipInput = '';
let peopleInput = document.querySelectorAll('.gen-input')[1];
let tipAmountOutput = document.querySelectorAll('.output')[0];
let totalOutput = document.querySelectorAll('.output')[1];

// Event Listeners //

billInput.addEventListener('keyup', function(){
    setValue("bill", billInput);
});

/*
tipInput.addEventListener('keyup', function(){
    setValue("tip", billInput);
});

*/

peopleInput.addEventListener('keyup', function(){
    setValue("people", peopleInput);
});


// Functions //

function setValue(value, input) {
    console.log(bill);
    eventChecker(value, input);
    calculateOutput(bill, 0.05, people);
}

function eventChecker (value, input) {
    if (value == 'bill') {
        bill = parseFloat(input.value);
    } else if (value == 'tip') {
        tip = parseFloat(input.value);
    } else if (value == 'people') {
        people = parseFloat(input.value);
    }
}

function calculateOutput (bill, tip, people) {
    tipAmount = bill * tip;
    tipPerPerson = parseFloat(tipAmount / people).toFixed(2);
    totalPerPerson = parseFloat((bill + tipAmount) / people).toFixed(2);

    if (totalPerPerson !== "Infinity" && totalPerPerson !== "NaN" && totalPerPerson > 0) {
        tipAmountOutput.innerText = "$" + tipPerPerson;
        totalOutput.innerText = "$" + totalPerPerson;
    } else {
        tipAmountOutput.innerText = "$00.00";
        totalOutput.innerText = "$00.00";
    }
}