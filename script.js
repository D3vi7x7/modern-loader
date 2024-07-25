gsap.to('.top',2,{
    top: '0%',
    ease:'power3.inOut'
})

gsap.to('.bottom',2,{
    bottom: '0%',
    ease:'power3.inOut'
})

gsap.to('.slider ,.slider3',3,{
    delay: 0.3,
    bottom:'-10%',
    left:'-52%',
    ease:'power4.inOut'
})

gsap.to('.slider2',3,{
    delay: 0.3,
    bottom:'-10%',
    left:'2%',
    ease:'power4.inOut'
})

gsap.to('.loading',2,{
    delay: 3.5,
    top: '-100%',
    ease:'power3.inOut'
})

gsap.from('.homepg .hero',2.5,{
    delay: 4,
    y: -100,
    ease:'power4.inOut'
})

gsap.to('.homepg',1,{
    delay: 4,
    opacity: '100%',
    ease:'power3.inOut'
})