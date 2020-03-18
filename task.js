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
    return finalResult;
}

function finalCalculateResult(){
if (cv.value >0) {
    if(refill.value>=0){
        if(percent.value>0&&percent.value<100){
            if(days.value>0&&(Math.trunc(days.value)==days.value)){
                alert(calculateDeposit());
            }else{
                console.log('Неверный формат');
                document.getElementById("red-tag-four").innerHTML= '&#9888;';
            }
        }else{
            console.log('Неверный формат');
            document.getElementById("red-tag-three").innerHTML= '&#9888;';
        }
    }else{
        console.log('Неверный формат');
        document.getElementById("red-tag-two").innerHTML= '&#9888;';
    }
} else {
    console.log('Неверный формат');
    document.getElementById("red-tag-one").innerHTML= '&#9888;';
}
}

button.addEventListener("click", finalCalculateResult);