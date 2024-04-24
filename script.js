console.log( "this is js enjected in sundown --_|-_-|--" )
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function flour_card() {
    let proj_contaner = document.getElementById("project-con")
// console.log(proj_contaner);
let project_card = document.getElementById("project-card")

proj_contaner.addEventListener("mouseenter" , function () {
    project_card.style.display = "block"
    
})
proj_contaner.addEventListener("mouseleave" , function () {
    project_card.style.display = "none"
    
})

let video = document.getElementById("videoPlayer")
let elements = document.querySelectorAll(".elem");
elements.forEach(function (e) {
        e.addEventListener("mouseenter",function () {
            
            
            let image = e.getAttribute("data-img");
            // console.log(image);

            if(image === null ){
                
                project_card.style.backgroundImage = `url()`
            }
            
            
            
            project_card.style.backgroundImage = `url(${image})`
            // let image = e.getAttribute("data-img")
        })
    }
)

// console.log(elements[4].getAttribute("data-img"));

}

flour_card()


// swiper js 
function swiper_func() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 80,
        
      });
}
swiper_func()





