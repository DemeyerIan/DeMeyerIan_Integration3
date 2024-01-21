import './reset.css'
import './style.css'

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
}


init();