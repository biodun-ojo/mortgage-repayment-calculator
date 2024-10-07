console.log ('lets do this')

const mortgageAmount = document.getElementById('mortA')
const mortgageTerm = document.getElementById('mortT') 
const interestRate = document.getElementById('interRate')
const button = document.getElementById('calculator')
const monthrepay = document.getElementById('monthrepay')
const totalrepay = document.getElementById('repaytotal')


function output() {

    //repayment type
    let rt = parseFloat(mortgageAmount.value)
    let hn = parseInt(mortgageTerm.value * 12)
    let ko = (parseFloat(interestRate.value) / 100)/12

    let sum = Math.floor((rt * (ko * Math.pow(1 + ko, hn))) / (Math.pow(1 + ko, hn) - 1));
    //let sum = rt((ko(1+ko)**hn)/(((1+ko)**hn)-1))

    console.log(sum) 
    

    
    //interest only type
}

button.addEventListener('click', () => output())
