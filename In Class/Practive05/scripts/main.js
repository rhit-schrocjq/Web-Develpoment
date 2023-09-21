let text = "Hello World"
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

text = "let x, y, z; \nx = 5; \ny = 6;\nz = x + y; \nOutput z = " + z;

x = 5 + 6;
y = x * 10;

text += "\n\nx = 5 + 6; \ny = x * 10; \nOutput y = " + y;

let w = 2;   // Allowed
text += "\n\nlet w = 2;   // Allowed\nOutput w = " + w;
{
let w = 3;   // Allowed
text += "\n\n{\nlet w = 3;   // Allowed\nOutput w = " + w +"\n}"
}

{
let w = 4;    // Allowed
text += "\n\n{\nlet w = 4;   // Allowed\nOutput w = " + w +"\n}"
}

{
const w = 2;    // Allowed
text += "\n\n{\nconst w = 2;   // Allowed\nOutput w = " + w +"\n}"
}

const p = 123e-5;   // 0.00123
text += "\n\nconst p = 123e-5;   // 0.00123\nOutput p = " + p;

console.log(text);
document.getElementById("toChange").innerHTML = text;
document.getElementById("toChange").style.backgroundColor = "rgb(255, 255, 255)";

function changeColor() {
    const element = document.getElementById("toChange");
    console.log(element.style.backgroundColor);
    if (element.style.backgroundColor == "rgb(255, 255, 255)") {
        console.log("here");
        element.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        element.style.backgroundColor = "rgb(255, 255, 255)";
    }
}