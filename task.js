let button = document.getElementById("for-deposit");
let days = 0;
let cv = 0;
let refill = 0;
let percent = 0;
function finalCalculateResult() {
    days = Number(document.getElementById("time").value);
    cv = Number(document.getElementById("cv").value);
    refill = Number(document.getElementById("refill").value);
    percent = Number(document.getElementById("percent").value);
    document.getElementById("red-tag-four").innerHTML = '';
    document.getElementById("red-tag-three").innerHTML = '';
    document.getElementById("red-tag-two").innerHTML = '';
    document.getElementById("red-tag-one").innerHTML = '';
    let checkCv = false;
    let checkRefill = false;
    let checkPercent = false;
    let checkDays = false;
    if (cv > 0) {
        checkCv = true;
    } else {
        console.log('Неверный формат');
        document.getElementById("red-tag-one").innerHTML = '&#9888;';
    }
    if (refill >= 0) {
        checkRefill = true;
    } else {
        console.log('Неверный формат');
        document.getElementById("red-tag-two").innerHTML = '&#9888;';
    }
    if (percent > 0 && percent < 100) {
        checkPercent = true;
    } else {
        console.log('Неверный формат');
        document.getElementById("red-tag-three").innerHTML = '&#9888;';
    }
    if (days > 0 && (Math.trunc(days) == days)) {
        checkDays = true;
    } else {
        console.log('Неверный формат');
        document.getElementById("red-tag-four").innerHTML = '&#9888;';
    }
    if (checkCv === true && checkRefill === true && checkPercent === true && checkDays === true) {
        alert(calculateDeposit(cv, refill, percent, days));
    }
}

function calculateDeposit(amount, reAmount, rate, time) {
    if (time >= 30) {
        let percentInd = rate / 100 / 12;
        let finalResult = amount + (amount * percentInd);
        let plusAmount = 0;
        for (let i = 0; i < (Math.trunc(time / 30) - 1); i++) {
            plusAmount = (finalResult + reAmount) * percentInd + reAmount;
            finalResult += plusAmount;
        }
        return finalResult;
    } else {
        let finalResult = amount;
        return finalResult;
    }
}


button.addEventListener("click", finalCalculateResult);