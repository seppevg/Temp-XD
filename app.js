AOS.init();
window.onresize = function () {
    if (window.innerWidth <= 600) {
        document.getElementById("logo").innerHTML = "XD";
    } else {
        document.getElementById("logo").innerHTML = "Digital Experience Design";
    }
}

let color = ["#71ff95", "#e3ff6f", "#a07eff", "#ff41fe", "#ff6728"];

document.getElementById("contact").addEventListener("mouseover", function () {
    let colorChoice = color[Math.floor(Math.random() * color.length)];
    document.getElementById("contact").style.backgroundColor = colorChoice;
    document.getElementById("contact").style.border = "1px solid " + colorChoice;
    document.getElementById("contact").style.color = "black";
});

document.getElementById("contact").addEventListener("mouseout", function () {
    document.getElementById("contact").style.backgroundColor = "transparent";
    document.getElementById("contact").style.border = "1px solid white";
    document.getElementById("contact").style.color = "white";
});

