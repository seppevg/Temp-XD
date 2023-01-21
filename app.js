AOS.init();

function logoChange() {
    if (window.innerWidth <= 600) {
        document.getElementById("logo").innerHTML = "XD";
    } else {
        document.getElementById("logo").innerHTML = "Digital Experience Design";
        document.getElementById("menu-overlay").style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById("menu").innerHTML = "Menu";
    }
}
window.onresize = function () {
    logoChange();
};
window.onload = function () {
    logoChange();
};

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

document.getElementById("menu").addEventListener("click", function () {
    if (document.getElementById("menu").innerHTML == "Menu") {
        document.getElementById("menu").innerHTML = "Close";
        document.getElementById("menu-overlay").style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("menu").innerHTML = "Menu";
        document.getElementById("menu-overlay").style.display = "none";
        document.body.style.overflow = "auto";
    }
});

document.getElementById("cta-button").addEventListener("mouseover", function () {

    let colorChoice = color[Math.floor(Math.random() * color.length)];
    document.getElementById("cta-button").style.backgroundColor = colorChoice;
    document.getElementById("cta-button").style.border =
        "1px solid " + colorChoice;
    document.getElementById("cta-button").style.color = "black";
});

document.getElementById("cta-button").addEventListener("mouseout", function () {
    document.getElementById("cta-button").style.backgroundColor = "transparent";
    document.getElementById("cta-button").style.border = "1px solid white";
    document.getElementById("cta-button").style.color = "white";
});

var modal = document.getElementById("myModal");
const projectImage = ["poster-sweet16.jpg", "kwetter.jpg", "buurtparlement-magazine.png", "poster-wier.png", "poster-her.png", "poster-wes-anderson.webp", "troubadour.png", "littlemissmaere.webp", "buurtparlement-logo.png", "localleaves.png", "turbo-pizza-club.webp", "portfolio-astra.webp"];
const projects = document.querySelectorAll(".project");
const modalImg = document.getElementById("img01");

projects.forEach((project) => {
    project.addEventListener("click", function () {
        const id = project.getAttribute("data-id");
        let img = "./assets/projects/big/" + projectImage[id];
        modal.style.display = "block";
        modalImg.src = img ;
        captionText.innerHTML = this.alt;
    });
});
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

