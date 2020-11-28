const userInput = document.getElementById('cardNumber');
const cardNumberResult = document.querySelector('#user-card-number');
const checkBtn = document.querySelector('#check');
const evenIndexResult = document.querySelector('#even-index');
const oddIndexResult = document.querySelector('#odd-index');
const totalSumResult = document.querySelector('#total-sum');
const resultText = document.querySelector('#result');

let totalSum;
let sumEven = 0;
let sumOdd = 0;
let isValid = false;

checkBtn.addEventListener('click', () => checkCard(userInput));

function checkCard(cardNumber){
    event.preventDefault();
    cardNumber = userInput.value;
    cardNumberResult.textContent += cardNumber;

    let cardNumerals = cardNumber.toString().split("");
    sumEvenIndex(cardNumerals);
    evenIndexResult.textContent += sumEven;

    sumOddIndex(cardNumerals);
    oddIndexResult.textContent += sumOdd;

    totalSum = sumEven + sumOdd;
    totalSumResult.textContent += totalSum;
    isValid = totalSum % 10  == 0 && totalSum > 0 ? true : false;
    
    resultText.textContent += isValid ? "Daxil etdiyiniz kart məlumatları düzgündür!" : "Daxil etdiyiniz kart məlumatları düzgün deyil!";
    checkBtn.disabled = true;
}

function sumEvenIndex(cardNumerals){
    for(i = 0; i < cardNumerals.length;  i++){
        if( (i + 1) % 2 === 0){
            sumEven += (+cardNumerals[i]);
        }
    }
}
function sumOddIndex(cardNumerals){
    for(i=0; i < cardNumerals.length; i++){
        if( (i+1) %2 !== 0 ){
            cardNumerals[i] *= 2
            cardNumerals[i] = cardNumerals[i] > 9 ? cardNumerals[i] - 9 : cardNumerals[i];
            sumOdd += cardNumerals[i]
        }
    }
}
