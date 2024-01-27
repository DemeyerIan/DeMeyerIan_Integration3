// Beginning of gsap animation

const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    console.log("Gsap is loaded in");

    let mm = gsap.matchMedia();

    mm.add("(max-width: 800px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".header_gsap",
                // markers: true,
                start: "top top",
                end: "bottom 20%",
                scrub: 3,
                pin: true,
            }
        });

        tl.to(".Sun", { x: -100 }, 0)
            .to(".berlinTower", { x: -50, scale: 1.4, y: -100, }, 0)
            .to(".belgiumAtomium", { x: -50, scale: 1.2, y: -100, }, 0)
            .to(".parisLouvre", { x: -100, scale: 1.2, y: -100, }, 0)
            .to(".wagons", { x: -1200 }, 0)
            .to(".header_title", { x: -600 }, 0)
            .to(".header_title_Sub", { x: -800 }, 0)
            .to(".header_title_text", { x: -900 }, 0);


        /*animation for Journey To CaÏro*/
        let tlca = gsap.timeline({
            scrollTrigger: {
                trigger: ".journeyToCaïro",
                // markers: true,
                start: "-10% top",
                end: "bottom 20%",
                scrub: 1,
                pin: true,
            }
        });

        tlca.add(gsap.fromTo(".gsap_h2_Cairo", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".gsap_p_Cairo", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".DESK_year", { opacity: 0, y: 60 }, { opacity: 1, duration: 4, y: 0 }), 1);



        let tlyear = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsapYearCaontainer",
                markers: true,
                start: "top 80%",
                end: "top 20%",
                scrub: 2,
                reverse: true,
            }
        });

        tlyear.add(gsap.fromTo(".gsapMOB1889", { x: 500 }, { duration: 1, x: 0 }), 0)
            .add(gsap.fromTo(".gsapMOB1930", { x: -500 }, { duration: 1, x: 0 }), 1);
    });



}

document.addEventListener('DOMContentLoaded', init);