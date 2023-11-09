document.addEventListener('DOMContentLoaded', async () => {
    const moveButton = document.getElementById("moveButton");
    const resetButton = document.getElementById("resetButton");
    const insertList = document.getElementById("insertList");
    const fromInput = document.getElementById("fromIndex");
    const toInput = document.getElementById("toIndex");

    moveButton.addEventListener('click', async function() {
        const fromIndex = fromInput.value;
        const toIndex = toInput.value;
        if (fromIndex && toIndex) {
            try {
                const response = await fetch(`http://localhost:3000/api/move/${fromIndex}/${toIndex}`, {method: "PUT"});
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                insertList.innerHTML = "";
                data.months.forEach(month => {
                    const listItem = document.createElement('li');
                    listItem.className = 'listItem';
                    listItem.innerHTML = month;
                    insertList.appendChild(listItem);
                });
                fromInput.value = "";
                toInput.value = "";
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

    });

    resetButton.addEventListener('click', async function() {
        const bodyData = JSON.stringify(
            {
                months: ["January", "February", "March", "April", "May", "June", "July",  "August", "September", "October", "November", "December"]
            });

        try {
            const response = await fetch('http://localhost:3000/api/setmonths', {method: "POST", headers: {"Content-Type":"application/json"}, body: bodyData});
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            insertList.innerHTML = "";
            data.forEach(month => {
                const listItem = document.createElement('li');
                listItem.className = 'listItem';
                listItem.innerHTML = month;
                insertList.appendChild(listItem);
            });
            fromInput.value = "";
            toInput.value = "";
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    });

    try {
        const response = await fetch('http://localhost:3000/api/getmonths');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        data.forEach(month => {
            const listItem = document.createElement('li');
            listItem.className = 'listItem';
            listItem.innerHTML = month;
            insertList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
