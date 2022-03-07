
// array destructring
const numbers = [42, 65]
// const x = numbers[0]
// const y = numbers[1]
// const [x, y] = [42, 65]

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums
}
// const [first, second] = (88, 45)
const [first, second] = boxify(88, 45)
// console.log(boxify(88, 45));

const number = [34, 23, 90, 77];
const student = {
    name:  'Sakib Alhasan',
    age: 35,
    movis: ['king khan', 'dhakar mastan']
}

// const [firstMovis, secondMovis] = ['king khan', 'dhakar mastan']
const [firstMovis, secondMovis] = student.movis
// console.log(student);

//  object destructring

const { name, age } = {name: 'hasim', age: 21 };
const { names, ages } = {id: 12, name: 'jamal', salary: 7000, age: 26}

const emplaye = {
    ide: 'vs code',
    degination: 'devaloper',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    spicafication: {
        height: 77,
        width: 88,
        address: 'borishal',
        drink: 'water'
    },
    watch: {
       color: 'black',
       price: 500,
       brand: 'garmin'
    }
}
const {machine, degination} = emplaye;
const {address, width} = emplaye.spicafication;
const {brand} = emplaye.spicafication.watch;
const {konoProperty, na, takle} = emplaye.spicafication?.watch;
console.log(brand);