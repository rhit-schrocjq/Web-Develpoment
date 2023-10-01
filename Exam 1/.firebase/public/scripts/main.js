function changeOwl() {
    if (document.getElementById("cardTitle").innerHTML == "Hedwig") {
        document.getElementById("cardTitle").innerHTML = "Pigwidgeon";
        document.getElementById("cardPic").src = "images/pigwidgeon.png";
    } else {
        document.getElementById("cardTitle").innerHTML = "Hedwig";
        document.getElementById("cardPic").src = "images/hedwig.png";
    }
}