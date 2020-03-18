let days = document.getElementById("time");
let cv = document.getElementById("cv");
let refill = document.getElementById("refill");
let percent = document.getElementById("percent");
let button = document.getElementById("for-deposit");

function calculateDeposit() {
    let percentInd = percent.value / 100 / 12;
    let finalResult = Number(cv.value) + Number(cv.value * percentInd);
    let refillValue = +refill.value;
    let plusAmount = 0;
    for (let i = 0; i < (Number(Math.trunc(days.value / 30)) - 1); i++) {
        plusAmount = (finalResult +refillValue) * Number(percentInd) + refillValue;
        finalResult += plusAmount;
    }
    console.log(finalResult);
    return finalResult;
}

function finalCalculateResult(){
if (cv.value >0) {
    if(refill.value>=0){
        if(percent.value>0&&percent.value<100){
            if(days.value>0){
                alert(calculateDeposit());
            }else{
                console.log('Неверный формат');
            }
        }else{
            console.log('Неверный формат');
        }
    }else{
        console.log('Неверный формат');
    }
} else {
    console.log('Неверный формат');
}
}

button.addEventListener("click", finalCalculateResult);