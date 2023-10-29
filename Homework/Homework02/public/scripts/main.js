document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById("anotherTestimony");
    switchButton.onclick = updateClient;
    const image = document.getElementById("testimonyImage");
    const name = document.getElementById("testimonyName");
    const content = document.getElementById("testimonyContent");

    function getRandomInt() {
        return Math.floor(Math.random() * 8) + 1
    }

    function clearText() {
        name.innerHTML = "";
        content.innerHTML = "";
        image.src = "";
    }

    function processText(text){
        console.log(text);
        let replacedText = text.replace(/(\.)/g, "!!!\n");
        return replacedText;
    }

    function textToArray(text){
        return text.split("\n");
    }

    function appendText(textArray){
        let paragraph = "";
        for (text of textArray) {
            paragraph += "<span>" + text + "</span><br>";
          };
        return paragraph;
    }

    function updateClient() {
        let id = getRandomInt()
        clearText()
        fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${id}`)
            .then(response => response.json())
            .then(data => {
            let processedText = processText(data.message);
            let arrayText = textToArray(processedText);
            content.innerHTML = appendText(arrayText);
            name.innerHTML = data.name;
            image.src = data.avatar;
            })
            .catch(error => {
            console.error("Error fetching data: ", error);
            content.innerHTML = "Error fetching data. Please try again.";
            });
    }

    updateClient();

});