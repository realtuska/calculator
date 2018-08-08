const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .dot')
    .forEach( btn => btn.addEventListener('click', numClick));
    
document.querySelectorAll('.calc .mult')
    .forEach( btn => btn.addEventListener('click', numMultClick));
    
document.querySelectorAll('.calc .divis')
    .forEach( btn => btn.addEventListener('click', numDivisClick));
    
document.querySelectorAll('.calc .ad')
    .forEach( btn => btn.addEventListener('click', numAddClick));
    
document.querySelectorAll('.calc .sub')
    .forEach( btn => btn.addEventListener('click', numSubClick));
    
let eqPressed = false;

function fib(num){
  let fn1 = 0;
  let fn2 = 1;
  let fn = 1;

  if (num === 0){
   return 0;
  } else {
    for (let i = 1; i < num; i++) {
      fn = fn1 + fn2;
      fn1 = fn2;
      fn2 = fn;  
    }
    return fn; 
  }
}    
    
function numClick(e) {
    if (eqPressed === true || (display.value == '0' && e.target.innerText != '.')){
            display.value = '';
            eqPressed = false;
    }
    display.value += e.target.innerText;
}

function numCalcClick(e) {
    eqPressed = false;
    display.value += e.target.innerText;
}

let separator ='';

function numAddClick(e) {
    eqPressed = false;
    separator = '+';
    display.value += e.target.innerText;
}

function numSubClick(e) {
    eqPressed = false;
    separator = '-';
    display.value += e.target.innerText;
}

function numMultClick(e) {
    eqPressed = false;
    separator = '*';
    display.value += e.target.innerText;
}

function numDivisClick(e) {
    eqPressed = false;
    separator = '/';
    display.value += e.target.innerText;
}

document.querySelector('.calc .proc')
    .addEventListener('click',  function(){
        let newArr = display.value.split (separator);
        if (newArr.length > 1){
            let sum = newArr.slice(0,newArr.length-1);
            let num = eval(sum.join(separator));
            let proc = (num/100)*newArr.pop();
            display.value = num + separator + proc;
         } else {
            display.value = newArr[0]/100;
         }
        eqPressed = true;
    });
    
document.querySelector('.calc .sqrt')
    .addEventListener('click',function(){
        let newArr = display.value.split(separator);
        let last = Math.sqrt(newArr.pop());
        newArr.push(last);
        display.value = newArr.join(separator);
        eqPressed = true;
    });
    
document.querySelector('.calc .sqr')
    .addEventListener('click', function(){
        let newArr = display.value.split(separator);
        let lastnum = newArr.pop();
        let last = lastnum*lastnum;
        newArr.push(last);
        display.value = newArr.join(separator);
        eqPressed = true;
    });
    
document.querySelector('.calc .fib')
    .addEventListener('click',function(){
       display.value=fib(Number(display.value));
       eqPressed = true;
    });

document.querySelector('.calc .fract')
    .addEventListener('click', function(){
        let newArr = display.value.split(separator);
        let last = 1/newArr.pop();
        newArr.push(last);
        display.value = newArr.join(separator);
        eqPressed = true;
    });    

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);  
        eqPressed = true;
    });
    
document.querySelector('.calc .modul')
    .addEventListener('click', function(){
        if (separator == ''){
           display.value = -Number(display.value);
        } else {
            let newArr = display.value.split(separator);
            if (separator != '-'){
                let last = -newArr.pop();
                newArr.push(last);
                display.value = newArr.join(separator);
            } else {
                separator = '+';
                display.value = newArr.join(separator);
            }
        }
        eqPressed = true;
    });
    
document.querySelector('.calc .clear')
    .addEventListener('click', function(){
        display.value = 0;        
    });
    
    
document.querySelector('.calc .backspace')
    .addEventListener('click', function(){
        if (display.value != '0'){
            display.value =  display.value.substring(0,  display.value.length - 1); 
        } else { 
            display.value = '';
        }
    });
    
