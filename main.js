import './reset.css'
import './style.css'


const reporterElement = document.querySelector('.reporter');
const visitorElement = document.querySelector('.visitor');
const chefElement = document.querySelector('.chef');
const diningElement = document.querySelector('.button_dining');
const SleepingElement = document.querySelector('.button_sleeping');
const BaggageElement = document.querySelector('.button_Baggage');
let dialogOneElement = document.querySelector('.dialog--dialogOne'); // Assign to the global variable
let dialogTwoElement = document.querySelector('.dialog--dialogTwo'); // Assign to the global variable
let dialogThreeElement = document.querySelector('.dialog--dialogThree'); // Assign to the global variable
let dialogDineElement = document.querySelector('.dialog--dialogTrain1'); // Assign to the global variable
let dialogSleepElement = document.querySelector('.dialog--dialogTrain2'); // Assign to the global variable
let dialogBaggageElement = document.querySelector('.dialog--dialogTrain3'); // Assign to the global variable
const closePopupButton = document.querySelector('.pupUpClose');
const closePopUpVisitor = document.querySelector('.pupUpCloseVisitor');
const closePopUpChef = document.querySelector('.pupUpCloseChef');
const closeDine = document.querySelector('.pupUpCloseDine');
const closeSleep = document.querySelector('.pupUpClosesleep');
const closeBaggage = document.querySelector('.pupUpCloseBagage');

const menuToggle = document.querySelector('#menuToggle');
const navChapters = document.querySelectorAll('.navChapter');


const updateLottiePlayerSrc = (city) => {
    const cityUrls = {
        istanbull: 'https://lottie.host/embed/b7bffbb4-f578-4c3b-821b-4b01928c1194/PRrsZakPDG.json',
        athens: 'https://lottie.host/embed/c072b55d-8fdd-4f78-86de-4711fc03e563/FrmG0hc58R.json',
        belgrade: 'https://lottie.host/embed/dce9ec65-2415-472b-a13f-2ec41b61b16a/KyVBEg3DO2.json',
        vienna: 'https://lottie.host/embed/616cef3a-80ac-4edc-9e17-df7c1eec49fe/Ou8DCxUezB.json',
    };
}
const init = () => {

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
}

init();
