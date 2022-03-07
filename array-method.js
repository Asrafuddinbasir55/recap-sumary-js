
  const products = [
        { name: 'laptop', price: 3000, brand: 'lanavo', color: 'silver' },
        { name: 'phone', price: 7000, brand: 'oppo', color: 'golden' },
        { name: 'watch', price: 3100, brand: 'casio', color: 'yellow' },
        { name: 'sunglass', price: 900, brand: 'r bon', color: 'black' },
        { name: 'camara', price: 9000, brand: 'canon', color: 'gray' },       
  ];
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);
// products.forEach(product => console.log(product)) 
// products.forEach(product => console.log(product.name)) 

products.forEach(product => {

})

// filter diclare

const cheap = products.filter(product => product.price >= 5000)
// console.log(cheap);
const spasipicNmae = products.filter(p => p.name.includes('w'))
// console.log(spasipicNmae);

// find dicler
const special = products.find(p => p.name.includes('n'))
console.log(special);