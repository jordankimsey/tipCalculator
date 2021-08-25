
const billAmount = document.getElementById('billAmount');
const tipPercent = document.querySelectorAll('.percentageButton');
const customTip = document.getElementById('customTip');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');
const reset = document.getElementById('reset');

let currentBillAmount;
let currentNumberOfPeople;
let currentTipValue;


function amountPerPerson(total, percent, ppl) {
    if (!total) return;
    if (!percent) return;
    if (!ppl) return;

    let tips = total * percent / 100;
    let tipToPay = tips / ppl;
    let totalMoneyPerPerson = total / ppl + tipToPay;

    tipPerPerson.innerHTML = tipToPay.toFixed(2);
    totalPerPerson.innerHTML = totalMoneyPerPerson.toFixed(2);

    //add reset 
}

function currentBill(value) {
    currentBillAmount = value;
    amountPerPerson(currentBillAmount, currentTipValue, currentNumberOfPeople);
}

function people(value) {
    currentNumberOfPeople = value;
    amountPerPerson(currentBillAmount, currentTipValue, currentNumberOfPeople);
}


function currentTip(value) {
    currentTipValue = value;
    amountPerPerson(currentBillAmount, currentTipValue, currentNumberOfPeople);
}


//Select Tip amount and add selected class
tipPercent.forEach(tip => {
    tip.addEventListener('click', (e) => {
        //checks if any buttons have been selected and removes class
        document.querySelectorAll('.selected').forEach(select => {
            select.classList.remove('selected')
        })
        //adds selected class on tip amount
        tip.classList.add('selected');
        customTip.value = "";
        currentTipValue = e.target.value;
        amountPerPerson(currentBillAmount, currentTipValue, currentNumberOfPeople);
        //need to update global current tip value
        // currentTipValue = tip.value;
    })
})



