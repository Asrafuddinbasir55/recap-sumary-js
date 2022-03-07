
// 'almas' 5, true, {}, []
// '', 0, false, null, undefind
// truety chack

let myVar = 5;
if(myVar) {
    myVar = myVar*100
}
else{
    myVar = 0;
}

let myMoney = 50;
// you chack truety of flase
if(!myMoney) {
   
}

let money = 80;
let food;
if(money > 100) {
  food = 'polau'
}
else {
    food = 'cha biskut'
}

// ternary 

let food1 = money > 100 ? 'polau': 'cha biskut'
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'cook' : 'filter water';
console.log(drink);

const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

const isActive = false;
const shoUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? shoUser() : hideUser();

// isActive && shoUser();

isActive || hideUser();

// toggle bolean
isActive = !isActive;