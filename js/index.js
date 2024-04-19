gsap.registerPlugin(ScrollTrigger);

gsap.from('.fly', {
    y: 400,
    opacity: 0, 
    duration: 2,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".review-animation",
        start: "top 80%",
        markers: false,
        scrub: true,
    }
});

gsap.from('.fly2', {
    xPercent: -100,
    duration: 5,
    opacity: 0, 
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 80%",
        markers: false,
        scrub: true,
    }
});

gsap.from('.fly3', {
    xPercent: 100,
    duration: 5,
    opacity: 0, 
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 80%",
        markers: false,
        scrub: true,
    }
});
