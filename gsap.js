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
                scrub: 1,
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
                scrub: 1,
                reverse: true,
                inSpacing: false,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
                reverse: true,
            }
        });

        tlbridge.add(gsap.fromTo(".gsapAN_bridge", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".bridge_animation", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 1);


        /*gsap scrolltrigger animation*/
        LottieScrollTrigger({
            target: "#animationWindow", // Replace with your element's selector
            path: "/assets/json/animation.json",
            speed: "slow",
            // markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            // Add other ScrollTrigger options if needed
        });

        // /*tunnel animation*/
        // let tlTunnel = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".IstanbullCairo",
        //         // markers: true,
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: 0,
        //         reverse: true,
        //         pin: true,
        //     }
        // });

        // // Animate tunnelMobile
        // tlTunnel.fromTo(".tunnelMobile",
        //     { y: '100%', opacity: 0 }, // Start from off-screen (below) with opacity 0
        //     { y: '0%', opacity: 1 } // End at original position with opacity 1
        // );

        //  // Animate gsapANTunnel
        //  tlTunnel.fromTo(".gsapANTunnel",
        //      { x: '-100%', opacity: 0 }, // Start from off-screen (above) with opacity 0
        //     { x: '0%', opacity: 1 } // End at original position with opacity 1
        //);

        let tlTunnel = gsap.timeline({
            scrollTrigger: {
                trigger: ".IstanbullCairo",
                // markers: true,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                reverse: true,
                pin: true,
            }
        });

        // Animate tunnelMobile and gsapANTunnel together
        tlTunnel.fromTo([".tunnelMobile", ".gsapANTunnel"],
            { x: '100%', opacity: 0 }, // Start from off-screen (right) with opacity 0
            { x: '0%', opacity: 1, duration: 1 } // End at original position with opacity 1
        );



        // Counter animations
        let tlCounter = gsap.timeline({
            scrollTrigger: {
                trigger: ".container_counter",
                // markers: true,
                start: "-5% top",
                end: "120% top",
                scrub: 1,
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
                scrub: 1,
                reverse: true,
            }
        });


        tlfooter.add(gsap.fromTo(".newStories", { opacity: 0, y: 40 }, { opacity: 1, duration: 1, y: 0 }));

    });


    mm.add("(min-width: 1024px)", () => {
        // DESK animatio header
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".header_gsap",
                // markers: true,
                start: "top top",
                end: "bottom 20%",
                scrub: 1,
                pin: true,
            }
        });

        tl.to(".Sun", { x: -100 }, 0)
            .to(".berlinTower", { x: 200, scale: 1.2, y: -30 }, 0)
            .to(".belgiumAtomium", { x: 100 }, 0)
            .to(".parisLouvre", { x: 200 }, 0)
            .to(".wagons", { x: -300, scale: 1.4 }, 0)
            .to(".header_title", { x: -600 }, 0)
            .to(".header_title_Sub", { x: -800 }, 0)
            .to(".header_title_text", { x: -900 }, 0);

        /*DESKanimation for Journey To CaÏro*/
        let tlca = gsap.timeline({
            scrollTrigger: {
                trigger: ".journeyToCaïro",
                // markers: true,
                start: "top 50%",
                end: "50% 50%",
                scrub: 1,
            }
        });

        tlca.add(gsap.fromTo(".gsap_h2_Cairo", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".gsap_p_Cairo", { opacity: 0, y: 30 }, { opacity: 1, duration: 1, y: 0 }), 0)
            .add(gsap.fromTo(".DESK_year", { opacity: 0, y: 60 }, { opacity: 1, duration: 4, y: 0 }), 1);



        /*DESKanimation for Year*/
        let tldeskyear = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsapYearCaontainer",
                // markers: true,
                start: "top 50%",
                end: "50% 50%",
                scrub: 1,
            }
        });


        // Animate .BIYear_DESK
        tldeskyear.fromTo(".BIYear_DESK", { opacity: 0, y: 40 }, { opacity: 1, y: 0 });

        // Animate .gsapANyearp2
        tldeskyear.fromTo(".gsapANyearp1", { opacity: 0, y: 40 }, { opacity: 1, y: 0 });

        // Animate .year_img
        tldeskyear.fromTo(".year_img", { opacity: 0, y: 40 }, { opacity: 1, y: 0 });

        // Animate .gsapANyearp2 again
        tldeskyear.fromTo(".gsapANyearp2", { opacity: 0, y: 40 }, { opacity: 1, y: 0 });




        /*animation for interactiveMap*/
        let tlMapDropdown = gsap.timeline({
            scrollTrigger: {
                trigger: ".interactiveMap_dropdown",
                // markers: true,
                start: "top 50%",
                end: "30% 50%",
                scrub: 1,
            }
        });

        tlMapDropdown.add(gsap.fromTo(".interactiveMap_dropdown_left", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0)
            .add(gsap.fromTo(".interactiveMap_dropdown_right", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);


        // aniamtion embarking the journey
        let tldeskDiscovery = gsap.timeline({
            scrollTrigger: {
                trigger: ".DESKEmberking_section",
                // markers: true,
                start: "-40% top",
                end: "50% 70%",
                scrub: 1,
            }
        });

        // Animate .DESKEmberking_section from right to center
        tldeskDiscovery.add(gsap.fromTo(".DESKEmberking_section", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);

        // Animate .DESKEmberking_img from right to center
        tldeskDiscovery.add(gsap.fromTo(".DESKEmberking_img", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);
        tldeskDiscovery.add(gsap.fromTo(".DESKEmberking", { opacity: 0 }, { opacity: 1 }), 0);




        // deskanimation luxury
        // Existing code
        let tldesklucury = gsap.timeline({
            scrollTrigger: {
                trigger: ".UnparalleledLuxury",
                // markers: true,
                start: "-50% top",
                end: "40% 50%",
                scrub: 1,
            }
        });

        // Animate .content_unparralleledLuxury from left to center
        tldesklucury.add(gsap.fromTo(".content_unparralleledLuxury", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);

        // Animate .flexboxCarDetails from right to center
        tldesklucury.add(gsap.fromTo(".flexboxCarDetails", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);



        // Trough 7 countries
        // Existing code
        let tldeskCountries = gsap.timeline({
            scrollTrigger: {
                trigger: ".sevenCountriesDESK",
                // markers: true,
                start: "-50% top",
                end: "40% 50%",
                scrub: 1,
            }
        });

        // Animate .gsapANCounSec1 from left to center
        tldeskCountries.add(gsap.fromTo(".gsapANCounSec1", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);

        // Animate .gsapANCounSec2 from right to center
        tldeskCountries.add(gsap.fromTo(".gsapANCounSec2", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 }), 0);


        // DESK animation bridge between east and west
        // Existing code
        let tlbridge = gsap.timeline({
            scrollTrigger: {
                trigger: ".bridge",
                // markers: true,
                start: "top 50%",
                end: "40% 50%",
                scrub: 1,
            }
        });

        // Animate .gsapAN_bridge from opacity: 0, y: 40 to opacity: 1, y: 0
        tlbridge.add(gsap.fromTo(".gsapAN_bridge", { opacity: 0, y: 90 }, { opacity: 1, y: 0 }), 0);
        tlbridge.add(gsap.fromTo(".bridgeDESKanimation", { x: 1500 }, { x: 0 }), 0);


        // DESK animation tunnel
        let tlTunnel = gsap.timeline({
            scrollTrigger: {
                trigger: ".IstanbullOverflowContainer",
                // markers: true,
                start: "top 50%",
                end: "40% 50%",
                scrub: 1,
            }
        });

        tlTunnel.add(gsap.fromTo(".gsapANTunnel", { opacity: 0, x: -600 }, { opacity: 1, x: 0 }), 0);
        tlTunnel.add(gsap.fromTo(".bridgeBetweenDESK", { y: 300, opacity: 0 }, { y: 0, opacity: 1 }), 0);








        // DESK animation counter
        // Existing code
        // Create a proxy object for each counter with a value property
        let counterTrain = { value: 0 };
        let counterShip = { value: 0 };
        let counterBus = { value: 0 };

        // Existing code
        let tlCounter = gsap.timeline({
            scrollTrigger: {
                trigger: ".DESkcontainer_illustration_counter",
                // markers: true,
                start: "top 30%",
                end: "40% 40%",
                scrub: 1,
            }
        });

        // Animate .DESKCounterTrain_container from opacity: 0 to opacity: 1
        tlCounter.add(gsap.fromTo(".DESKCounterTrain_container", { opacity: 0, x: -400 }, { opacity: 1, x: 0 }), 0);

        // Animate counterTrain.value from 0 to its final value
        tlCounter.add(gsap.to(counterTrain, { value: 4, roundProps: "value", onUpdate: function () { document.querySelector('.DESKCounterTrain').textContent = Math.ceil(counterTrain.value); } }), 0);

        // Repeat for the other containers and counters
        tlCounter.add(gsap.fromTo(".DESKCounterShip_container", { opacity: 0, x: -400 }, { opacity: 1, x: 0 }), 1);
        tlCounter.add(gsap.to(counterShip, { value: 2, roundProps: "value", onUpdate: function () { document.querySelector('.DESKCounterShip').textContent = Math.ceil(counterShip.value); } }), 1);

        tlCounter.add(gsap.fromTo(".DESKCounterBus_container", { opacity: 0, x: -400 }, { opacity: 1, x: 0 }), 2);
        tlCounter.add(gsap.to(counterBus, { value: 1, roundProps: "value", onUpdate: function () { document.querySelector('.DESKCounterBus').textContent = Math.ceil(counterBus.value); } }), 2);



        // First row experience 
        // Existing code
        let tlExperience = gsap.timeline({
            scrollTrigger: {
                trigger: ".DESKFirstRow",
                // markers: true,
                start: "top 30%",
                end: "40% 50%",
                scrub: 1,
            }
        });

        // Animate .DESKfirstrownSec from x: -400 to x: 0
        tlExperience.add(gsap.fromTo(".DESKfirstrownSec", { x: -400, opacity: 0 }, { x: 0, opacity: 1 }), 0);

        // Animate .DeskFirstRowCon2 from x: 400 to x: 0
        tlExperience.add(gsap.fromTo(".DeskFirstRowCon2", { x: 400, opacity: 0 }, { x: 0, opacity: 1 }), 0);

        // Animate buttons one by one from opacity: 0, y: 40 to opacity: 1, y: 0
        let buttons = document.querySelectorAll(".DESKFirstRow button");
        buttons.forEach((button, index) => {
            tlExperience.add(gsap.fromTo(button, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }), index * 0.5);
        });


        // aniamtion 3D models
        // Existing code
        let tlDESK3dmodel = gsap.timeline({
            scrollTrigger: {
                trigger: ".dModels",
                // markers: true,
                start: "-40% 30%",
                end: "40% 50%",
                scrub: 1,
            }
        });

        // Animate .DESK_button_container from opacity: 0, x: -100 to opacity: 1, x: 0
        tlDESK3dmodel.add(gsap.fromTo(".DESK_button_container", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }), 0);

        // Animate .DESK_details_model_container from opacity: 0, x: 100 to opacity: 1, x: 0
        tlDESK3dmodel.add(gsap.fromTo(".DESK_details_model_container", { opacity: 0, x: 100 }, { opacity: 1, x: 0 }), 0);



        // Footer animation desktop
        // Existing code
        let tlDESKFooter = gsap.timeline({
            scrollTrigger: {
                trigger: ".newStories",
                // markers: true,
                start: "-40% 50%",
                end: "-40% 30%",
                scrub: 1,
            }
        });

        // Animate .newStories from opacity: 0, y: 50 to opacity: 1, y: 0
        tlDESKFooter.add(gsap.fromTo(".newStories", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }), 0);

        // END OF MEDIA QUERY
    });


}

document.addEventListener('DOMContentLoaded', init);