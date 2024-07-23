let incomeJanuary = document.getElementById("incomeJanuary");
let expensesJanuary = document.getElementById("expensesJanuary");
let savedJanuary = document.getElementById("savedJanuary")
let btn = document.getElementById("btn");

function calculateJanuary() {
    let one = incomeJanuary.value;
    let two = expensesJanuary.value;
    let result = one - two;

    savedJanuary.innerHTML = result;
}
