let screen = document.getElementById("finalresult");
let newresult;
let myVal = {
    preNum: null,
    newNum: null,
    answer:0
};

let operation = '';

var MyFlag =false;

function getOp(op) {
    operation = op;
    MyFlag =false;
    // console.log(op);
}

function getnumbers(number) {
    // screen.value = number;
if(MyFlag){
    let rslt;
if(myVal.newNum){
    rslt=myVal.newNum+''+number; 
    myVal.newNum=rslt; 

    screen.value = rslt;

}
else{
    rslt =myVal.preNum+''+number;
    myVal.preNum=rslt;
    screen.value = rslt;

    // screen.value = number;
}
}
else{ 
    screen.value = number;
    if (myVal.preNum) {
        myVal.newNum = number;
    }

    else {
        myVal.preNum = number;
    }
    MyFlag=true;
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
            newresult = Number(myVal.preNum) +Number(myVal.newNum);
            screen.value = newresult;
            myVal.preNum = newresult;
        }

        if (operation === '-') {
            newresult =  Number(myVal.preNum)-Number(myVal.newNum);
            screen.value = newresult;
            myVal.preNum = newresult;
        }
        if (operation === '÷') {

            newresult =  Number(myVal.preNum)/ Number(myVal.newNum);
            screen.value = newresult;
            myVal.preNum = newresult;
        }
        if (operation === 'X') {
            newresult =  Number(myVal.preNum) * Number(myVal.newNum);
            screen.value = newresult;
            myVal.preNum = newresult;
        }
      



    }
    MyFlag =false;
// myVal.answer=newresult;
console.log(myVal.answer);
}