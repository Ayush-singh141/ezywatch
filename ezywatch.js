//var crsr = document.querySelector("#cursor")
//document.addEventListener("mousemove",function(dets){
    //crsr.style.left = dets.x + "px"
    //crsr.style.top = dets.y + "px"
//})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -15%",
        end:"top -80%",
        scrub:2
        
    }
})