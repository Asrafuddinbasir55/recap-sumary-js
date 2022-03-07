// json stringify parce
const student = {
    name:  'Sakib Alhasan',
    age: 35,
    movis: ['king khan', 'dhakar mastan']
}
const studentJSON = JSON.stringify(student)
// console.log(student);
// console.log(studentJSON);
const studentObj = JSON.parse(studentJSON)
// console.log(studentObj);

// fetch

// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))

// kay values
const keys = Object.keys(student) 
const values = Object.values(student) 

// for
const numbers = [23, 77, 88, 98, 43, 7] 
numbers.forEach(num => console.log(num))
// console.log(numbers);
numbers.map(num => num * 2)

// for of on array like object
// loop on object using for in

// add or remove of array
const products = [
    { name: 'laptop', price: 3000, brand: 'lan', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'hic', color: 'golden' },
    { name: 'watch', price: 3100, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 900, brand: 'r bon', color: 'black' },
    { name: 'camara', price: 9000, brand: 'canon', color: 'gray' },       
];

const newProduct = {name: 'wevcam', price: 500, brand: 'lal'}
// copy products array then add newProduct
const newProducts = [...products, newProduct]
console.log(newProduct, newProducts);

// create a new array without one spacific item
// remove phones mens create a new array without the phone
const remaning = products.filter(p => p.name !== 'phone')
console.log(remaning);