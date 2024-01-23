import './reset.css'
import './style.css'


const reporterElement = document.querySelector('.reporter');
let dialogOneElement = document.querySelector('.dialog--dialogOne'); // Assign to the global variable
const closePopupButton = document.querySelector('.pupUpClose');


const updateLottiePlayerSrc = (city) => {
    const cityUrls = {
        istanbull: 'https://lottie.host/embed/b7bffbb4-f578-4c3b-821b-4b01928c1194/PRrsZakPDG.json',
        athens: 'https://lottie.host/embed/c072b55d-8fdd-4f78-86de-4711fc03e563/FrmG0hc58R.json',
        belgrade: 'https://lottie.host/embed/dce9ec65-2415-472b-a13f-2ec41b61b16a/KyVBEg3DO2.json',
        vienna: 'https://lottie.host/embed/616cef3a-80ac-4edc-9e17-df7c1eec49fe/Ou8DCxUezB.json',
    };
}
const init = () => {
    const buttons = document.querySelectorAll('.map__button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const city = this.classList[1].split('--')[1];
            updateLottiePlayerSrc(city);
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

        closePopupButton.addEventListener('click', function () {
            // Execute closeDialog first
            dialogOneElement.classList.remove('dialog--open');
            dialogOneElement.classList.add('dialog--closed');
            //pause audio



            // Use a setTimeout to delay the removal of 'flex' class
            setTimeout(function () {
                // Remove the 'flex' class from dialogOneElement after a delay
                dialogOneElement.classList.remove('flex');
                dialogOneElement.classList.remove('dialog--closed');
                document.body.classList.remove('dialog-open');
                ;
            }, 500); // 2000 milliseconds (2 seconds) delay, adjust as needed
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
}

init();
