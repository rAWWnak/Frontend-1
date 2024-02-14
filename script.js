var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+ "px"
    crsr.style.top = dets.y+ "px"
})
document.addEventListener("mousemove", function(dets){
    blur.style.left = dets.x - 100+ "px"
    blur.style.top = dets.y - 100 + "px"
    
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -20%",
        scrub: 2
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body", 
        start: "top -50%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:60,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub : 3
    }
});
gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub : 1
    }
});
gsap.from("#colon1",{
    x:-40,
    y:-40,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%%",
        scrub : 3
    }
});
gsap.from("#colon2",{
    x:40,
    y:40,
    duration:5,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub : 3
    }
});
gsap.from("#page4 h1",{
    y:50,
    duration:5,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub : 3
    }
});


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    }); 
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

