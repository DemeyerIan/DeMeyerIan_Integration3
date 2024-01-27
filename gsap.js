// Beginning of gsap animation
function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        st = {
            trigger: target,
            pin: true,
            start: "top top",
            end: speeds[vars.speed] || "+=1000",
            scrub: 1,
        },
        ctx = gsap.context && gsap.context(),
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path,
            rendererSettings: vars.rendererSettings || {
                preserveAspectRatio: "xMidYMid slice",
            },
        });
    for (let p in vars) {
        // let users override the ScrollTrigger defaults
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
        let createTween = function () {
            animation.frameTween = gsap.to(playhead, {
                frame: animation.totalFrames - 1,
                ease: "none",
                onUpdate: () => animation.goToAndStop(playhead.frame, true),
                scrollTrigger: st,
            });
            return () => animation.destroy && animation.destroy();
        };
        ctx && ctx.add ? ctx.add(createTween) : createTween();
        // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
    });
    return animation;
}

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


        /*animation for Year*/
        let tlyear = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsapYearCaontainer",
                // markers: true,
                start: "top 80%",
                end: "top 10%",
                scrub: 2,
                reverse: true,
            }
        });

        tlyear.add(gsap.fromTo(".gsapMOB1889", { x: 500 }, { duration: 1, x: 0 }), 0)
            .add(gsap.fromTo(".gsapMOB1930", { x: -500 }, { duration: 1, x: 0 }), 1)
            .add(gsap.fromTo(".gsapAnimationGeorges", { x: -500 }, { duration: 1, x: 0 }), 2);


        /*animation for interactiveMap*/
        let tlInteractiveMap = gsap.timeline({
            scrollTrigger: {
                trigger: ".interactiveMap",
                // markers: true,
                start: "top 50%",
                end: "top 20%",
                scrub: 2,
                reverse: true,
            }
        });

        tlInteractiveMap.add(gsap.fromTo(".istanbull", { opacity: 0 }, { opacity: 1, duration: 1 }), 0)
            .add(gsap.fromTo(".athens", { opacity: 0 }, { opacity: 1, duration: 1 }), 1)
            .add(gsap.fromTo(".belgrade", { opacity: 0 }, { opacity: 1, duration: 1 }), 2)
            .add(gsap.fromTo(".vienna", { opacity: 0 }, { opacity: 1, duration: 1 }), 3);



        /*animation for journeyOfDiscovery*/
        let tljourneyOfDiscovery = gsap.timeline({
            scrollTrigger: {
                trigger: ".journeyOfDiscovery",
                // markers: true,
                start: "top 80%",
                end: "top 20%",
                scrub: 2,
                reverse: true,
            }
        });

        tljourneyOfDiscovery.add(gsap.fromTo(".gsapANDiscoveryh2", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".gsapANDiscoveryp", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 1)
            .add(gsap.fromTo(".gsapANDiscoveryp2", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 2)
            .add(gsap.fromTo(".gsapANDiscoveryIMG", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 3);




        /*animation for Unparrallled luxury*/
        let tlluxury = gsap.timeline({
            scrollTrigger: {
                trigger: ".UnparalleledLuxury",
                // markers: true,
                start: "top 50%",
                end: "top 10%",
                scrub: 2,
                reverse: true,
            }
        });

        tlluxury.add(gsap.fromTo(".content_unparralleledLuxury", { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }), 0)
            .add(gsap.fromTo(".gsaph3Luxury", { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }), 1)
            .add(gsap.fromTo(".flexboxCarDetails", { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }), 2);



        /* Trough 7 countries MOBILE*/
        let tltrough = gsap.timeline({
            scrollTrigger: {
                trigger: ".sevenCountries",
                // markers: true,
                start: "top 80%",
                end: "top 10%",
                scrub: 2,
                reverse: true,
            }
        });

        tltrough.add(gsap.fromTo(".gsapMOBTrough1", { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }), 0)
            .add(gsap.fromTo(".gsapMOBTrough2", { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }), 1);



        /*bridge between east and west*/
        let tlbridge = gsap.timeline({
            scrollTrigger: {
                trigger: ".bridge",
                // markers: true,
                start: "top 70%",
                end: "top 10%",
                scrub: 2,
                reverse: true,
            }
        });

        tlbridge.add(gsap.fromTo(".gsapAN_bridge", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".bridge_animation", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 1);


        /*gsap scrolltrigger animation*/
        LottieScrollTrigger({
            target: "#animationWindow", // Replace with your element's selector
            path: "/INT3/assets/json/animation.json",
            speed: "medium",
            scrub: 2,
            // Add other ScrollTrigger options if needed
        });

    });
}

document.addEventListener('DOMContentLoaded', init);