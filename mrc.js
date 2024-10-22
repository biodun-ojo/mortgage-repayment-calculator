console.log('lets do this')

const mortgageAmount = document.getElementById('mortA')
const mortgageTerm = document.getElementById('mortT')
const interestRate = document.getElementById('interRate')
const button = document.getElementById('calculator')
const monthrepay = document.getElementById('monthrepay')
const totalrepay = document.getElementById('repaytotal')
const option1 = document.getElementById('repayment')
const option2 = document.getElementById('interestOnly')
const clearbtn = document.getElementById('clear')
const empty = document.getElementById('empty')
const complete = document.getElementById('complete')
const main3 = document.getElementsByClassName('bud3')


function output() {

    let principal = parseFloat(mortgageAmount.value) //principal
    let loanTerm = parseInt(mortgageTerm.value * 12) //loan term
    let InterestRat = (parseFloat(interestRate.value) / 100) / 12 //interest rate

    if (option1.checked) {
        console.log('Option 1 is selected');
        //repayment type

        let monpay = Math.floor((principal * (InterestRat * Math.pow(1 + InterestRat, loanTerm))) / (Math.pow(1 + InterestRat, loanTerm) - 1));

        let totalrepayment = monpay * loanTerm

        monthrepay.textContent = `£ ${monpay}`
        totalrepay.textContent = `£ ${totalrepayment}`

        console.log(totalrepayment)
        console.log(monpay)

    } else if (option2.checked) {
        console.log('Option 2 is selected');

        let monpay = Math.floor(principal * InterestRat)
        let paytot = monpay * loanTerm
        let totalrepayment = paytot + principal

        monthrepay.textContent = `£ ${monpay}`
        totalrepay.textContent = `£ ${totalrepayment}`

        console.log(totalrepayment)
        console.log(monpay)
    } else {
        console.log('Neither option is selected');
    }
}

function clearz() {
    const inputFields = document.querySelectorAll('input'); // Selects all input elements
    for (const inputField of inputFields) {
        inputField.value = '';
    }

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    for (const radioInput of radioInputs) {
        radioInput.checked = false;
    }
}

function propDisplay() {
    empty.style.display = 'none',
    complete.style.display = 'block'
}

/* Using .trim() removes any leading or trailing whitespace, so even if the field contains only spaces, it will count as empty. 

function formError() {
    console.log('form not comeplete')

    if (main3.value.trim() === '') {
        main3.style.bordercolor = 'red';
    }
}

*/


button.addEventListener('click', (event) => {
    event.preventDefault()
    //formError()
    propDisplay()
    output()
})
clearbtn.addEventListener('click', () => clearz())
