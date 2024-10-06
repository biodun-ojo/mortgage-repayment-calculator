console.log ('lets do this')

const mortgageAmount = document.getElementById('mortA')
const mortgageTerm = document.getElementById('mortT') 
const interestRate = document.getElementById('interRate')
const button = document.getElementById('calculator')

function output() {
    let rt = parseFloat(mortgageAmount.value)
    let hn = parseInt(mortgageTerm.value * 12)
    let ko = (parseFloat(interestRate.value) / 100)/12

    let sum = (rt * (ko * Math.pow(1 + ko, hn))) / (Math.pow(1 + ko, hn) - 1);
    //let sum = rt((ko(1+ko)**hn)/(((1+ko)**hn)-1))

    console.log(sum) 
}

button.addEventListener('click', () => output())
