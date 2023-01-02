const slider = document.querySelectorAll('.slider_list');
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');
let direction = 0;

let width=slider[1].children[1].offsetWidth
let style= getComputedStyle(slider[1].children[1]);
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


let sideBar = document.querySelector(".sidebar")
let menuLogo = document.querySelector(".menu_logo")

menuLogo.addEventListener("click", function(){

sideBar.classList.toggle("sidebarShow")
sideBar.style.transition="1s"


})


let trendingMovies=document.querySelector(".trend_movies_list"),
    centerContainer=document.querySelector(".active_trend"),
    centerContainerMovie,
    moviesList=document.querySelectorAll(".trend_movies_list img"),
    rankingNumber=document.querySelector(".topTrends_banner .rankingNumber"),
    actorsList=document.querySelector(".starringActors"),
    movieGenre=document.querySelector(".movieGenre"),
    movieTags=document.querySelector(".movieTags"),
    topTrends=document.querySelector(".topTrends_banner"),
    TrendMovieList = [
    {movieName:"The Mandalorian",
     topRanking:"5",
     description:"The travels of a lone bounty hunter in the outer reaches if the galaxy, far from the authority of the new republic",
     starring:"James Earl Jones, John Khani",
     genres:"action, crime",
     tags:"music, mythology",
    imageSource:'img/banner-2eye.jpg'},

     {movieName:"The reckless",
     topRanking:"2",
     description:"The travels of a lone bounty hunter in the outer reaches if the galaxy, far from the authority of the new republic",
     starring:"James Earl Jones,James Chinlund",
     genres:"Drama,Fantasy",
     tags:"Brother, Brother Relationship, Kings, Vikings",
     imageSource:'img/banner-4.jpg'},

     {movieName:"Zombie World",
     topRanking:"1",
     description:"The travels of a lone bounty hunter in the outer reaches if the galaxy, far from the authority of the new republic",
     starring:"Debbi Bossi, Karen Gilshrist",
     genres:"Action, adventure, drama",
     tags:"Brother relationship, king, apocalypse",
     imageSource:'img/banner-3zombie-island-banner-1.jpg' },

     {movieName:"Criminals and Agents",
     topRanking:"3",
     description:"The travels of a lone bounty hunter in the outer reaches if the galaxy, far from the authority of the new republic",
     starring:"Debbi Rossi, Mark Livolsi",
     genres:"Drama,Romance",
     tags:"Brothers, criminal, realtionships",
     imageSource:'img/Banner-5.jpg' },

     {movieName:"Football",
     topRanking: "6",
     description:"The travels of a lone bounty hunter in the outer reaches if the galaxy, far from the authority of the new republic",
     starring:"Robert Rodriguez, Robert Romanson",
     genres:"Comedy, drama",
     tags:"4k ultra, brother, relationship, vikings",
     imageSource:'img/banner-1.jpg'},
]


trendingMovies.addEventListener("click", (event)=>{
  let centerContainerMovie=document.querySelectorAll(".active_trend img")[0]
 
    
    if(event.target.getAttribute('src')===centerContainerMovie.getAttribute('src')){
            return;
    } 

    else{
        let clonned=centerContainerMovie.cloneNode(true)
        trendingMovies.appendChild(clonned)
        trendingMovies.insertBefore(clonned,event.target)
        centerContainer.appendChild(event.target)
        centerContainerMovie.remove()


        topTrends.style.opacity="0"
        topTrends.style.transition="1s"


    topTrends.addEventListener('transitionend',()=>{

        for(let i=0; i<TrendMovieList.length; i++){
            if(event.target.getAttribute('src')===TrendMovieList[i].imageSource){
                topTrends.style.opacity="1"
                topTrends.style.backgroundImage="linear-gradient(to right, rgb(0 0 0 / 93%), rgba(0, 0, 0, 0) ),url("+TrendMovieList[i].imageSource+")"
                rankingNumber.innerHTML= TrendMovieList[i].topRanking
                actorsList.innerHTML= TrendMovieList[i].starring
                movieGenre.innerHTML= TrendMovieList[i].genres
                movieTags.innerHTML= TrendMovieList[i].tags

            }
    }

    })

}
})


let topMovies=document.querySelectorAll(".top_movies_item img")
let topBanner= document.querySelector(".us_top_movies")
topMovies.forEach((item) =>{

item.addEventListener('click', (event)=>{
    let movieItem=event.target.getAttribute('src')
    topBanner.style.backgroundImage= "url(" +movieItem+")"
 
})


})