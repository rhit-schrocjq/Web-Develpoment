const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)


const fs = require('fs');
fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json'); 
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataBuffer);
console.log(data);


