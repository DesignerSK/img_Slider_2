let list = document.querySelector(".slider .list");
let alleElemente = document.querySelectorAll(".slider .list .alleElemente");
let dots = document.querySelectorAll(".slider .dots li");


let zuruck = document.getElementById("zuruck");
let weiter = document.getElementById("weiter");

let active = 0;
let langenItems = alleElemente.length - 1;



//weiter button
weiter.onclick = function(){
    if(active + 1 > langenItems){
            active = 0;
    } else {
            active += 1;
    }
    sliderNeuLaden();
}
// zuruck button
zuruck.onclick = function() {
    if(active -1 < 0){
        active = langenItems;
    } else {
            active = active - 1;
    }
    sliderNeuLaden();
}

let refreshSlider = setInterval(() =>{
    weiter.click()
    }, 2000);

function sliderNeuLaden(){
    let checkLeft = alleElemente[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastAactiveDot = document.querySelector(".slider .dots li.active");
    lastAactiveDot.classList.remove("active");
    dots[active].classList.add("active");
}


dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        sliderNeuLaden();
    });
});

