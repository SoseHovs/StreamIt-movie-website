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




prev.forEach((prevs, index) =>  prevs.addEventListener ('click', function () {
    direction = -1;
    slider[index].style.transform = "translate(" + fullWidth + "px)"
})   
    )

next.forEach((nexts,index) => nexts.addEventListener ('click', function () {
    direction = 1
    slider[index].style.transform = "translate(" + (-fullWidth) +"px)"
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


// ............................................................................












let sideBar = document.querySelector(".sidebar")
let menuLogo = document.querySelector(".menu_logo")

menuLogo.addEventListener("click", function(){

sideBar.classList.toggle("sidebarShow")
sideBar.style.transition="1s"


})






