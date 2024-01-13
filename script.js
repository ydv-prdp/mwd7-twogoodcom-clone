const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoCon(){
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    
    videocon.addEventListener("mouseenter",function(dets){
        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })
    })
    
    videocon.addEventListener("mouseleave",function(){
          gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    })
    
    videocon.addEventListener("mousemove", function(dets){
       gsap.to(playbtn, {
        left:dets.x-90,
        top:dets.y-90
       })
    })
}

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.8,
        stagger:0.3
    })
    gsap.from("#page1 #video-container", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })
}

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor", {
        left:dets.x,
        top:dets.y,
    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform:'translate(-50%,-50%) scale(1)'
    })
})
loadingAnimation()
videoCon()


