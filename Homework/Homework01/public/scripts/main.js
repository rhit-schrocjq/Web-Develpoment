let number = 0;

updateView = function () {
    document.querySelector("#textBox").innerHTML = `${number}`
}

function updateContainer(color, text) {
    document.getElementById("favoriteColorBox").innerHTML = text;
    document.getElementById("favoriteColorBox").style.backgroundColor = color;
}

main = function () {
    console.log("Ready");

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        number = number - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        number = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        number = number + 1;
        updateView();
    };

    document.querySelectorAll(".colorCols > button").forEach(button => {
        button.onclick = (event) => {
            updateContainer(getComputedStyle(button).backgroundColor, button.innerHTML)
        }
    });
}

main();