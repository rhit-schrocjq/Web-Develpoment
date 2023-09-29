for(let i = 2; i<=10; i+=2){
    console.log(i);
}

for(let i = 5; i>0; i--) {
    console.log(i);
}

const numbers = [1,2,3,4,5];

let sum = 0;
for(number of numbers) {
    sum += number;
}
console.log(sum);

const student = {name: 'John', age : 20, grade: 'A'};
for(key in student) {
    console.log(key);
}

const book = {title: 'Harry Potter', author:'J.K. Rowling', year: 1997};
for(key in book) {
    console.log(book[key]);
}

const colors = ['red','green', 'blue', 'yellow'];
for(color of colors) {
    console.log(color);
}

const temperatures = [32, 68, 75, 82, 56];
function convert(temp) {
    console.log((temp - 32) * (5/9));
}
temperatures.forEach(convert);

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {"New York":8398748,'Los Angeles':3990456, 'Chicago':2705994,'Houston':2320268}
function getPop(city) {
    console.log(populations[city]);
}
cities.forEach(getPop);
