
const number = [34, 23, 90, 77];
const student = {
    name:  'Sakib Alhasan',
    age: 35,
    movis: ['king khan', 'dhakar mastan']
}

// template string 

const about = `My Name is ${student.name} age of ${student.age} has numbers ${number[2]}
also liked movis ${student.movis[1]}`;
console.log(about);

// arro function dicleare

const fiftyFive = () => 55;
const addFiftyFive = num => num + 65;
const isEvent = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 * num2;
    return sum;
}

// spreed operatoe

const newNumber = [...number];
number.push(99)
number.push(99)
number.push(99)
// console.log(newNumber);
// console.log(number);

// create a new array form older array amd add element

const correctNumber = [...number, 44]
console.log(number);
console.log(newNumber);
console.log(correctNumber);
