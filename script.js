
let screen = document.getElementById("finalresult");
let newresult;
let myVal = {
    preNum: null,
    newNum: null,
    answer:0
};

let operation = '';

function getOp(op) {
    operation = op;
    // console.log(op);
}

function getnumbers(number) {
    screen.value = number;
    if (myVal.preNum) {
        myVal.newNum = number;
    }

    else {
        myVal.preNum = number;
    }
    console.log(number);
}

function cls() {
    // screen.value = 0;
    location.reload();

}

function eval() {
    console.log(myVal);

    if (myVal.newNum && myVal.newNum && operation) {
        if (operation === '+') {
            newresult = myVal.preNum + myVal.newNum;
            screen.value = newresult;
            myVal.preNum = newresult;
        }

        if (operation === '-') {
            newresult = myVal.preNum - myVal.newNum;
            screen.value = newresult;
            myVal.preNum = newresult;
        }
        if (operation === '÷') {

            newresult = myVal.preNum / myVal.newNum;
            screen.value = newresult;
            myVal.preNum = newresult;
        }
        if (operation === 'X') {
            newresult = myVal.preNum * myVal.newNum;
            screen.value = newresult;
            myVal.preNum = newresult;
        }

    }

myVal.answer=newresult;
console.log(myVal.answer);
}