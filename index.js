const slider = document.querySelectorAll('.slider_list');
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');
let direction = 0;
let x=1

let width=slider[0].children[1].offsetWidth
let style= getComputedStyle(slider[0].children[1]);
let itemMarginRight= style.marginRight;
let itemMarginLeft=style.marginLeft
let margins=parseInt(itemMarginRight)+parseInt(itemMarginLeft)
let fullWidth = width+margins

prev.forEach(prevs =>  prevs.addEventListener ('click', function () {
    direction = -1;
    if(prevs.classList.contains("prev2")){
    x=1}
    else {
    x=0
    }
    slider[x].style.transform = "translate(" + fullWidth + "px)"
})   
    )

next.forEach(nexts => nexts.addEventListener ('click', function () {
    if(nexts.classList.contains("next2")){
        x=1}
    else{
        x=0}
    direction = 1
    slider[x].style.transform = "translate(" + (-fullWidth) +"px)"
})    )


slider.forEach(sliders =>  sliders.addEventListener ('transitionend', function () {
    if (direction === 1) {
        sliders.appendChild (sliders.firstElementChild);
    } else if (direction === -1) {
        sliders.prepend (sliders.lastElementChild);
    }
    sliders.style.transition = 'none';
    sliders.style.transform = 'translate(0)';
    setTimeout (() => {
        sliders.style.transition = 'all 1s';
        direction = 0
    })
}, false))



let sideBar = document.querySelector(".sidebar")
let menuLogo = document.querySelector(".menu_logo")

menuLogo.addEventListener("click", function(){

sideBar.classList.toggle("sidebarShow")
sideBar.style.transition="1s"


})