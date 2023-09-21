window.onresize = screen;
window.onload = screen;

main = function() {
    console.log("Ready");
    console.log(window.innerWidth);
    screen();
}
main();

function screen() {
    Width = window.innerWidth;
    document.querySelector("#size").innerHTML = `Width : ${Width} px`;
}