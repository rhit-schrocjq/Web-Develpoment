const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON)

const fs = require('fs');
fs.writeFileSync('1-json.json', bookJSON);
