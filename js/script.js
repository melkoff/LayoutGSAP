gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.hero-section', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '1200',
            scrub: true
        }
    })

    let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsLeft.forEach(item => {
        gsap.fromTo(item, { x: -500 , opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: -100,
                scrub: true
            }
        })
    })


    let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsRight.forEach(item => {
        gsap.fromTo(item, { x: 500 , opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: -100,
                scrub: true
            }
        })
    })
