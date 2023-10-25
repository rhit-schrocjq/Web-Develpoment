const fs = require('fs');
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city);
data.name = "Josh";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data);
fs.writeFileSync('data.json', updateDataJSON);
