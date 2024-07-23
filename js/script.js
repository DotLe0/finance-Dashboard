let btn = document.getElementById("btn");

function calculateAll() {
    const inputs = document.querySelectorAll("input");
    const income = Array.from(inputs).slice(0,12).map(incom => {return incom.value;});
    const expenses = Array.from(inputs).slice(12,24).map(expens => {return expens.value;});
    console.log(income)
    console.log(expenses)
}

function calculateJanuary() {
    let incomeJanuary = document.getElementById("incomeJanuary");
    let expensesJanuary = document.getElementById("expensesJanuary");
    let savedJanuary = document.getElementById("savedJanuary")
    let one = incomeJanuary.value;
    let two = expensesJanuary.value;
    let result = one - two;

    savedJanuary.innerHTML = result;
}

function calculateFeburary() {
    let incomeFeburary = document.getElementById("incomeFebruary");
    let expensesFeburary = document.getElementById("expensesFebruary");
    let savedFebruary = document.getElementById("savedFebruary");

    let result = incomeFeburary.value - expensesFeburary.value;
    savedFebruary.innerHTML = result;
}
