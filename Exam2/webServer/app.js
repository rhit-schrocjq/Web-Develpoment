const express = require("express");
const app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());
const cors = require("cors");
app.use(cors());

const fs = require("fs").promises;
const serverSideStorage = "../data/db.json";

async function readFromServer() {
    try {
        const data = await fs.readFile(serverSideStorage, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading from server:', error);
        return [];
    }
}

async function saveToServer(data) {
    try {
        await fs.writeFile(serverSideStorage, JSON.stringify(data, null, 2), 'utf-8');
        console.log("Data saved successfully!");
    } catch (error) {
        console.error('Error writing to server:', error);
    }
}


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/api/getmonths', async (req,res) => {
    const data = await readFromServer();
    res.json(data.months);
})


app.put('/api/move/:fromIndex/:toIndex', async (req, res) => {
    const {fromIndex, toIndex} = req.params;
    let data = await readFromServer();
    if (!data) {
        return res.status(404).json({error: 'Data not found'});
    }
    const monthMoved = data.months.splice(fromIndex, 1)[0]; // Does the splice and returns the month
    data.months.splice(toIndex, 0, monthMoved);  // Inserts the month back into the array at the index
    data.moved_month = monthMoved;
    data.from_index = fromIndex;
    data.to_index = toIndex;
    await saveToServer(data);
    res.json(data);
});

app.post('/api/setmonths', async (req, res) => {
    const data = req.body;
    await saveToServer(data);
    res.status(201).json(data.months);
});