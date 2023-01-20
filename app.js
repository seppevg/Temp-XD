AOS.init();

function logoChange() {
  if (window.innerWidth <= 600) {
    document.getElementById("logo").innerHTML = "XD";
  } else {
    document.getElementById("logo").innerHTML = "Digital Experience Design";
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

document
  .getElementById("cta-button")
  .addEventListener("mouseover", function () {
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

// Image popup
const popup = document.getElementById("popup");
const projects = document.querySelectorAll(".project");
const buttonClose = document.querySelector(".button-close");
projects.forEach((project) => {
  project.addEventListener("click", function () {
    //project name zoeken (bvb project-1, project-3 of project-12)
    console.log(project.getAttribute("class"));
    popup.classList.toggle("show");
  });
});

buttonClose.addEventListener("click", function () {
  popup.classList.toggle("show");
});
