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
const form = document.getElementById('left')


function output() {

    let principal = parseFloat(mortgageAmount.value) //principal
    let loanTerm = parseInt(mortgageTerm.value * 12) //loan term
    let InterestRat = (parseFloat(interestRate.value) / 100) / 12 //interest rate

    if (option1.checked) {
        console.log('Option 1 is selected');
        //repayment type

        let monpay = Math.floor((principal * (InterestRat * Math.pow(1 + InterestRat, loanTerm))) / (Math.pow(1 + InterestRat, loanTerm) - 1));
        //let sum = rt((ko(1+ko)**hn)/(((1+ko)**hn)-1))

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

    //interest only type
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

button.addEventListener('click', () => output())
clearbtn.addEventListener('click', () => clearz())
