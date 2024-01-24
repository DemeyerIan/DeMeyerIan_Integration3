import './reset.css'
import './style.css'


const reporterElement = document.querySelector('.reporter');
const visitorElement = document.querySelector('.visitor');
const chefElement = document.querySelector('.chef');
let dialogOneElement = document.querySelector('.dialog--dialogOne'); // Assign to the global variable
let dialogTwoElement = document.querySelector('.dialog--dialogTwo'); // Assign to the global variable
let dialogThreeElement = document.querySelector('.dialog--dialogThree'); // Assign to the global variable
const closePopupButton = document.querySelector('.pupUpClose');
const closePopUpVisitor = document.querySelector('.pupUpCloseVisitor');
const closePopUpChef = document.querySelector('.pupUpCloseChef');
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

        closePopUpVisitor.addEventListener('click', function () {
            closeDialog(dialogTwoElement);
        });

        closePopUpChef.addEventListener('click', function () {
            closeDialog(dialogThreeElement);
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
