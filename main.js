import './reset.css'
import './style.css'


const reporterElement = document.querySelector('.reporter');
const visitorElement = document.querySelector('.visitor');
const chefElement = document.querySelector('.chef');
const diningElement = document.querySelector('.button_dining');
const SleepingElement = document.querySelector('.button_sleeping');
const BaggageElement = document.querySelector('.button_Baggage');

const frenchElement = document.querySelector('.details_french_class');
const type18Element = document.querySelector('.Type18Change');
const germanElement = document.querySelector('.GermanClassChange');
const britischElement = document.querySelector('.BritischClassChange');

let dialogOneElement = document.querySelector('.dialog--dialogOne'); // Assign to the global variable
let dialogTwoElement = document.querySelector('.dialog--dialogTwo'); // Assign to the global variable
let dialogThreeElement = document.querySelector('.dialog--dialogThree'); // Assign to the global variable
let dialogDineElement = document.querySelector('.dialog--dialogTrain1'); // Assign to the global variable
let dialogSleepElement = document.querySelector('.dialog--dialogTrain2'); // Assign to the global variable
let dialogBaggageElement = document.querySelector('.dialog--dialogTrain3'); // Assign to the global variable

let dialogFrenchElement = document.querySelector('.dialog--dialog3dFrench'); // Assign to the global variable
let dialogType18Element = document.querySelector('.dialog--dialog3dType18'); // Assign to the global variable
let dialogGermanElement = document.querySelector('.dialog--dialog3dFerman'); // Assign to the global variable
let dialogBritishElement = document.querySelector('.dialog--dialog3dBritish'); // Assign to the global variable

const closePopupButton = document.querySelector('.pupUpClose');
const closePopUpVisitor = document.querySelector('.pupUpCloseVisitor');
const closePopUpChef = document.querySelector('.pupUpCloseChef');
const closeDine = document.querySelector('.pupUpCloseDine');
const closeSleep = document.querySelector('.pupUpClosesleep');
const closeBaggage = document.querySelector('.pupUpCloseBagage');

const closeFrench = document.querySelector('.pupUpClose3dFrench');
const closeBritish = document.querySelector('.pupUpClose3dBritisch');
const closeGerman = document.querySelector('.pupUpClose3dGerman');
const closeType18 = document.querySelector('.pupUpClose3dType18');

const buttons = document.querySelectorAll('.dModels_button_container button');
const contentDivs = document.querySelectorAll('.changeContent3d');

const menuToggle = document.querySelector('#menuToggle');
const navChapters = document.querySelectorAll('.navChapter');

// DESK select +read content
const deskCameraButton = document.querySelector('.DESKCamera');
const deskMartiniButton = document.querySelector('.DESKMartini');
const desKaasButton = document.querySelector('.DESKKaas');
const experienceDiv = document.querySelector('.DESKExperienceInnhher');


const init = () => {
    //document.querySelector('html').

    document.querySelector(".istanbull").addEventListener("click", function () {
        // Change the innerHTML of the .animation-container-mobile
        document.querySelector(".animation-container-mobile").innerHTML = '<iframe src="https://lottie.host/embed/b7bffbb4-f578-4c3b-821b-4b01928c1194/PRrsZakPDG.json"></iframe>';
    });
    document.querySelector(".athens").addEventListener("click", function () {
        // Change the innerHTML of the .animation-container-mobile
        document.querySelector(".animation-container-mobile").innerHTML = '<iframe src="https://lottie.host/embed/c072b55d-8fdd-4f78-86de-4711fc03e563/FrmG0hc58R.json"></iframe>';
    });
    document.querySelector(".belgrade").addEventListener("click", function () {
        // Change the innerHTML of the .animation-container-mobile
        document.querySelector(".animation-container-mobile").innerHTML = '<iframe src="https://lottie.host/embed/dce9ec65-2415-472b-a13f-2ec41b61b16a/KyVBEg3DO2.json"></iframe>';
    });
    document.querySelector(".vienna").addEventListener("click", function () {
        // Change the innerHTML of the .animation-container-mobile
        document.querySelector(".animation-container-mobile").innerHTML = '<iframe src="https://lottie.host/embed/616cef3a-80ac-4edc-9e17-df7c1eec49fe/Ou8DCxUezB.json"></iframe>';
    });

    menuToggle.addEventListener('change', function () {
        // Check if the checkbox is checked
        if (this.checked) {
            // Add the 'dialog-open' class to the body
            document.body.classList.add('dialog-open');
        } else {
            // Remove the 'dialog-open' class from the body
            document.body.classList.remove('dialog-open');
        }
    });

    navChapters.forEach(navChapter => {
        navChapter.addEventListener('click', function () {
            // Execute this code when any navChapter is clicked
            document.body.classList.remove('dialog-open');
            menuToggle.checked = false;
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Get the elements

        // Add click event listener to reporterElement
        reporterElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogOneElement
            dialogOneElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogOneElement.classList);
            openDialog();
        });


        visitorElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogTwoElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogTwoElement.classList);
            dialogTwoElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        britischElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogBritishElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogBritishElement.classList);
            dialogBritishElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        germanElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogGermanElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogGermanElement.classList);
            dialogGermanElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        frenchElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogFrenchElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogFrenchElement.classList);
            dialogFrenchElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        type18Element.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogType18Element.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogType18Element.classList);
            dialogType18Element.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        BaggageElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogBaggageElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogBaggageElement.classList);
            dialogBaggageElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        diningElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogDineElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogDineElement.classList);
            dialogDineElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        SleepingElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogSleepElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogSleepElement.classList);
            dialogSleepElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        chefElement.addEventListener('click', function () {
            // Add the 'flex' class to dialogTWo
            dialogThreeElement.classList.add('flex');
            // Optional: Log the classList for debugging
            console.log(dialogThreeElement.classList);
            dialogThreeElement.classList.add('dialog--open');
            document.body.classList.add('dialog-open');
        });

        // Function to close a dialog
        function closeDialog(dialogElement) {
            if (dialogElement.classList.contains('dialog--open')) {
                dialogElement.classList.remove('dialog--open');
                dialogElement.classList.add('dialog--closed');
            }

            // Add logic to pause audio if needed

            // Use a setTimeout to delay the removal of 'flex' class
            setTimeout(function () {
                dialogElement.classList.remove('flex');
                dialogElement.classList.remove('dialog--closed');
                document.body.classList.remove('dialog-open');
            }, 500); // Adjust the delay as needed
        }

        // Event listener for closing dialog Element
        closePopupButton.addEventListener('click', function () {
            closeDialog(dialogOneElement);
        });

        closeFrench.addEventListener('click', function () {
            closeDialog(dialogFrenchElement);
        });

        closeBritish.addEventListener('click', function () {
            closeDialog(dialogBritishElement);
        });

        closeGerman.addEventListener('click', function () {
            closeDialog(dialogGermanElement);
        });

        closeType18.addEventListener('click', function () {
            closeDialog(dialogType18Element);
        });




        closeBaggage.addEventListener('click', function () {
            closeDialog(dialogBaggageElement);
        });

        closePopupButton.addEventListener('click', function () {
            closeDialog(dialogOneElement);
        });

        closePopUpVisitor.addEventListener('click', function () {
            closeDialog(dialogTwoElement);
        });


        closeSleep.addEventListener('click', function () {
            closeDialog(dialogSleepElement);
        });

        closePopUpChef.addEventListener('click', function () {
            closeDialog(dialogThreeElement);
        });

        closeDine.addEventListener('click', function () {
            closeDialog(dialogDineElement);
        });

    });

    function openDialog() {
        // Use the correct variable name: dialogOneElement
        dialogOneElement.classList.add('dialog--open');
        document.body.classList.add('dialog-open');
    }

    function toggleSound(audioId, button) {
        let audio = document.getElementById(audioId);
        let playImage = button.querySelector('.playPauseButton_ContentPlay');
        let pauseImage = button.querySelector('.playPauseButton_ContentPause');

        if (audio) {
            if (audio.paused) {
                audio.play();
                // Show pause icon and hide play icon
                playImage.style.display = 'none';
                pauseImage.style.display = 'block';
            } else {
                audio.pause();
                // Show play icon and hide pause icon
                playImage.style.display = 'block';
                pauseImage.style.display = 'none';
            }
        } else {
            console.error('Audio element not found for ID: ' + audioId);
        }
    }

    // sound play/pause button
    document.querySelector('.soundButton').addEventListener('click', function () {
        // Call the toggleSound function when the button is clicked
        toggleSound('sound1', this);
    });

    // Event listener for playing/pausing sound in dialogTwoElement
    document.querySelector('.dialog--dialogTwo .soundButton').addEventListener('click', function () {
        toggleSound('sound2', this);

    });
    // Event listener for playing/pausing sound in dialogTwoElement
    document.querySelector('.dialog--dialogThree .soundButton').addEventListener('click', function () {
        toggleSound('sound3', this);
    });


    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Remove isActive class from all buttons
            buttons.forEach(btn => btn.classList.remove('isActive'));

            // Add isActive class to the clicked button
            this.classList.add('isActive');

            // Hide all content divs
            contentDivs.forEach(div => div.classList.add('notDisplay'));

            // Show the corresponding content div based on the clicked button
            contentDivs[index].classList.remove('notDisplay');
        });
    });


    deskCameraButton.addEventListener('click', function () {
        // Change the innerHTML of the experienceDiv
        experienceDiv.innerHTML = `
        <h5 class="popUpSub ">Introduction</h5>
        <p class="deskReadp">
        I feel compelled to share with you the extraordinary tale of an experience that seems to have
        transcended the boundaries of time and luxury. A journey that unfolded on the Venice
        Simplon-Orient-Express, a train that boasts of Grand Suites rumored to be among the "most expensive
        hotel rooms" in the world, per square meter.
      </p>
      <h5 class="popUpSub">Grand Suites and Cost</h5>
      <p class="deskReadp">
        Imagine, if you will, a journey from Venice to London, where each square meter of the Grand Suites
        costs a staggering 24,000 euros. It was an escapade that whisked me away from the mundane, as if I
        held Willy Wonka's golden ticket, granted to me by the esteemed Belmond, the luxury purveyor of this
        magnificent train.
      </p>
      <h5 class="popUpSub">History of Carriage 3309</h5>
      <p class="deskReadp">
        The carriage, numbered 3309, whispered tales of yesteryears. A sleeper car from 1926 that once
        traversed the routes connecting Paris to Bucharest and Munich to Istanbul, marooned in a snowdrift
        outside Istanbul for five days in 1929, an incident immortalized by Agatha Christie in "Murder on
        the
        Orient Express." This carriage now houses the Budapest Suite, a veritable work of art on wheels.
      </p>
      <h5 class="popUpSub">Budapest Suite Details</h5>
      <p class="deskReadp">
        This carriage now houses the Budapest Suite, a veritable work of art on wheels. Embroidered silks
        mingled with Lalique glass and Baccarat crystal, creating an ambiance that transcends mere opulence.
        The mirrors alone, a hefty 27,000 euros each, whispered secrets of the past. In this mobile haven,
        guests are greeted with Veuve Clicquot Saint Petersbourg Champagne and Steluga Tsar Imperial caviar,
        enjoyed at their leisure throughout the journey. The suite, adorned with onyx, marble, and Murano
        glass, promises an experience that lingers like the notes of a cherished melody.
      </p>
      <h5 class="popUpSub">Scenic Views</h5>
      <p class="deskReadp">
        As the train gently rolled through Europe, the Budapest Suite's modest sofa became my sanctuary.
        Through the large windows, the snowy Italian Alps, the chalets of Austria's Brenner Pass, the green
        pastures of Switzerland, and the vineyards of France unfolded like scenes from a vintage film.
      </p>
      <h5 class="popUpSub">Culinary Experience</h5>
      <p class="deskReadp">
        But the allure wasn't just visual. The culinary symphony orchestrated by Chef Jean Imbert in the
        six-meter-long, one-meter-wide kitchen was nothing short of magic. From the Champagne breakfast to
        the
        four-course dinner, each dish felt like a work of art.
      </p>
      <h5 class="popUpSub">Quirks and Conclusion</h5>
      <p class="deskReadp DESKReadLast">
        Yet, the journey wasn't without its quirks. The Budapest Suite's spacious ensuite bathroom was a
        charming but cozy affair. Yet, these were trifles, whispers in the wind when compared to the
        grandeur
        of the entire experience.

        The question that lingered in the air, like the echoes of a bygone era, was whether a nearly $28,000
        journey for a single night could be justified. The answer, my dear, lies not just in the opulence
        but
        in the historic tapestry woven through this slow, elegant travel.
      </p>
        `;
    });
    deskMartiniButton.addEventListener('click', function () {
        // Change the innerHTML of the experienceDiv
        experienceDiv.innerHTML = `
        <h5 class="popUpSub ">Introduction</h5>
                <p class="deskReadp">
                  Hello There,

                  I trust this letter finds you well, wrapped in the gentle embrace of life's joys. Today, I am
                  bursting
                  with excitement to share the tale of my recent sojourn aboard the legendary Orient Express. Allow me
                  to introduce myself; Eleanor is my name, a wanderer captivated by the allure of timeless journeys
                  and
                  the enchantment of days gone by.

                </p>
                <h5 class="popUpSub">Boarding and Transition</h5>
                <p class="deskReadp">
                  Picture this: our adventure kicked off on the platform of a historic European city. The air was
                  thick
                  with anticipation as we boarded the Orient Express, its carriages exuding a magnetic charm. The
                  conductor, a paragon of old-world grace, orchestrated our seamless transition. Bags in the hands of
                  porters, we were on the brink of setting forth into a realm of enduring elegance and timeless
                  allure.
                </p>
                <h5 class="popUpSub">Dining Delights</h5>
                <p class="deskReadp">
                  Once aboard, the dining carriage became my sanctuary—a haven of gastronomic delights curated by the
                  talented Chef Jean Imbert. The rhythmic motion of the train accompanied each delightful morsel,
                  creating an ambiance of pure delight.

                </p>
                <h5 class="popUpSub">Evening Entertainment</h5>
                <p class="deskReadp">
                  As evening descended, our enchanting journey continued in Bar Car '3674.' Cocktails flowed, and the
                  piano serenaded us into the night. Amidst laughter and the rustle of elegant dresses, the metallic
                  blue crépe and the harmonious symphony of the night unfolded.

                </p>
                <h5 class="popUpSub">Midnight Brunch</h5>
                <p class="deskReadp">
                  Midnight brought with it an unexpected delight brunch. Lobster rolls and truffle club sandwiches
                  were
                  served in Bar Car '3674,' a sumptuous affair that transcended into the night. The pianist played on,
                  serenading us until the last reveler decided to bid the night farewell.

                </p>
                <h5 class="popUpSub">Historic Cabins</h5>
                <p class="deskReadp">
                  In the hush that followed the night's revelry, I found solace in the historic cabins, each one
                  meticulously restored to the grandeur of the 1920s. Crisp sheets embraced me, cocooning me in the
                  whispers of history.
                </p>
                <h5 class="popUpSub">Dawn and New Beginnings</h5>
                <p class="deskReadp">
                  With the dawn of a new day came the aroma of coffee and pastries served in my cabin. A comforting
                  start, heralding the promise of new beginnings on the horizon.

                </p>
                <h5 class="popUpSub">Scenic Views</h5>
                <p class="deskReadp">
                  Peering through the windows, nature unveiled its splendors rolling hills and awe-inspiring Alpine
                  mountains. It was as if the world itself was putting on a show for those fortunate enough to be
                  aboard.

                </p>
                <h5 class="popUpSub">Exploration of Carriages</h5>
                <p class="deskReadp">
                  Wandering through the opulent carriages, each with its unique charm, I stumbled upon hidden
                  corners—a boutique, look-out points—each nook telling a story, inviting exploration and building
                  an appetite for the wonders yet to be revealed.

                </p>
                <h5 class="popUpSub">Lavish Lunch</h5>
                <p class="deskReadp">
                  Lunch unfolded as a lavish affair in the dining carriages. Three decadent courses accompanied
                  spirited conversation and a touch of Chardonnay. Dining on the Orient Express is a symphony of
                  flavors, an experience that lingers on the palate.


                </p>
                <h5 class="popUpSub">Conclusion</h5>
                <p class="deskReadp DESKReadLast">
                  As our journey approached its end in a new city waiting to be explored, the excitement
                  remained palpable. There was always time for one final cocktail, one last toast to the
                  memories crafted on this extraordinary voyage.

                  In closing, I offer this glimpse of my adventure, hoping it sparks the same wanderlust that
                  led me to the Orient Express. Until our paths cross again, may your days be filled with tales
                  as captivating as this one.

                </p>
        `;
    });
    desKaasButton.addEventListener('click', function () {
        // Change the innerHTML of the experienceDiv
        experienceDiv.innerHTML = `
        <h5 class="popUpSub">Introduction</h5>
        <p class="deskReadp">
          Hello there, my name is Alex, and I'm honored to share a glimpse into my world working on the Orient
          Express.

        </p>
        <h5 class="popUpSub">Culinary Odyssey</h5>
        <p class="deskReadp">
          Picture this, a culinary odyssey on the iconic Orient Express, where every day felt like a thrilling
          adventure in the heart of the kitchen. Under the discerning eye of our remarkable Chef, each moment
          brought fresh challenges, turning ordinary kitchen tasks into exciting feats.
        </p>
        <h5 class="popUpSub">Kitchen Dynamics</h5>
        <p class="deskReadp">
          The kitchen, a realm where even dishwashers were held to the highest standards, became a place where
          skills blossomed, and responsibilities grew with expertise—a journey that made every workday a
          blast.
        </p>
        <h5 class="popUpSub">Work-Life Balance</h5>
        <p class="deskReadp">
          Our workplace was a mix of flexibility and fun. Mornings were for surfing, afternoons for
          rejuvenating
          naps, and evenings for crafting culinary delights before stepping out for the night.
        </p>
        <h5 class="popUpSub">Diversity of Experiences</h5>
        <p class="deskReadp">
          The diversity of experiences was captivating, especially during those tense dinner rushes that added
          an exhilarating touch to our routine, keeping us on our toes and pushing our limits.
        </p>
        <h5 class="popUpSub">Camaraderie in the Kitchen</h5>
        <p class="deskReadp">
          What made it truly special was the camaraderie among the kitchen staff. We weren't just colleagues;
          we
          were a tight-knit family navigating dinner rushes together, sharing triumphs and creating memories.

        </p>
        <h5 class="popUpSub">Discovering Excellence</h5>
        <p class="deskReadp">
          In the heart of the Orient Express kitchen—a space filled with precision and a bit of chaos—I
          discovered that excellence in culinary artistry could emerge from the smallest kitchen space. The
          challenges of a tiny kitchen became the canvas for creating plates of artistry and finesse.

        </p>
        <h5 class="popUpSub">Satisfaction in Contribution</h5>
        <p class="deskReadp">
          The rush of the dinner service was undeniable, but the satisfaction of contributing to a unique and
          historic journey made it all worthwhile. As plates left the kitchen for the Budapest Suite and other
          grand carriages, I felt a part of something truly extraordinary.

        </p>
        <h5 class="popUpSub">Kitchen Atmosphere</h5>
        <p class="deskReadp">
          Surrounded by the clatter of pots and pans, the aroma of exquisite cuisine, and the camaraderie of
          my
          kitchen companions, I found more than just a job; it was an adventure filled with flavors,
          challenges,
          and the joy of being part of a team that turned each meal into a work of art.


        </p>
        <h5 class="popUpSub">Closing and Invitation</h5>
        <p class="deskReadp DESKReadLast">
          So, if you ever find yourself aboard the Orient Express, savoring a meticulously crafted dish,
          remember the dedicated team behind each culinary masterpiece—individuals like me, Alex, weaving
          magic
          in the kitchen and turning every meal into a cherished memory.
        </p>
        `;
    });
}

init();
