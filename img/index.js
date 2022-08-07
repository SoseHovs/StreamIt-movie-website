const slider = document.querySelector ('.latest_movies_list');

const next = document.querySelector ('.next');
const prev = document.querySelector ('.prev');

next.addEventListener ('click', function () {
    setTimeout(()=>{
        slider.prepend (slider.lastElementChild);
    },1000)
    slider.style.transform = 'translate(25%)';
});
prev.addEventListener ('click', function () {
    setTimeout(()=>{
        slider.append(slider.firstElementChild);
    },1000)
    slider.style.transform = 'translate(-25%)';

});

slider.addEventListener ('transitionend', function () {
    // get the last element and append it to the front
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout (() => {
        slider.style.transition = 'all 1s';
    })
}, false);




