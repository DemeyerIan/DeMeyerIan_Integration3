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
            speed: "slow",
            // markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 3,
            // Add other ScrollTrigger options if needed
        });

        /*tunnel animation*/
        let tlTunnel = gsap.timeline({
            scrollTrigger: {
                trigger: ".IstanbullCairo",
                // markers: true,
                start: "top top",
                end: "bottom top",
                scrub: 2,
                reverse: true,
                pin: true,
            }
        });

        // Animate tunnelMobile
        tlTunnel.fromTo(".tunnelMobile",
            { y: '100%', opacity: 0 }, // Start from off-screen (below) with opacity 0
            { y: '0%', opacity: 1 } // End at original position with opacity 1
        );

        // Animate gsapANTunnel
        tlTunnel.fromTo(".gsapANTunnel",
            { x: '-100%', opacity: 0 }, // Start from off-screen (above) with opacity 0
            { x: '0%', opacity: 1 } // End at original position with opacity 1
        );



        // Counter animations
        let tlCounter = gsap.timeline({
            scrollTrigger: {
                trigger: ".container_counter",
                // markers: true,
                start: "-5% top",
                end: "120% top",
                scrub: 0,
                reverse: true,
                pin: true,
            }
        });

        // Set the initial state of the elements
        gsap.set([".counter_item_train", ".ship", ".bus"], { opacity: 0, x: -100 });

        // Animate the .counter_item_train element
        tlCounter.to(".counter_item_train", { duration: 1, opacity: 1, x: 0 });

        // Animate the counter .counter--one from 0 to 4
        tlCounter.fromTo(".counter--one", { innerText: 0 }, {
            duration: 1, innerText: 4, ease: "none", onUpdate: function () {
                document.querySelector(".counter--one").innerText = Math.round(this.targets()[0].innerText);
            }
        });

        // Animate the .ship element
        tlCounter.to(".ship", { duration: 1, opacity: 1, x: 0 });

        // Animate the counter .counter--two from 0 to 2
        tlCounter.fromTo(".counter--two", { innerText: 0 }, {
            duration: 1, innerText: 2, ease: "none", onUpdate: function () {
                document.querySelector(".counter--two").innerText = Math.round(this.targets()[0].innerText);
            }
        });

        // Animate the .bus element
        tlCounter.to(".bus", { duration: 1, opacity: 1, x: 0 });

        // Animate the counter .counter--three from 0 to 1
        tlCounter.fromTo(".counter--three", { innerText: 0 }, {
            duration: 1, innerText: 1, ease: "none", onUpdate: function () {
                document.querySelector(".counter--three").innerText = Math.round(this.targets()[0].innerText);
            }
        });



        /*footer*/
        let tlfooter = gsap.timeline({
            scrollTrigger: {
                trigger: ".newStories",
                // markers: true,
                start: "top 80%",
                end: "70% 90%",
                scrub: 0,
                reverse: true,
            }
        });


        tlfooter.add(gsap.fromTo(".newStories", { opacity: 0, y: 40 }, { opacity: 1, duration: 1, y: 0 }));

    });
}

document.addEventListener('DOMContentLoaded', init);