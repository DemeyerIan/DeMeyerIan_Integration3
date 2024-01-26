document.querySelectorAll('.steplist').forEach(steplist => {
    steplist.addEventListener('click', function (event) {
        if (event.target.nodeName !== 'LI') return;
        const items = event.target.closest('.steplist').querySelectorAll('li');
        for (const item of items) {
            item.classList.toggle('active', item === event.target);
        }
    });
});

class Destination {

    constructor(name, time) {
        this.name = name
        this.time = time
    }

    createListItem() {
        const listItem = document.createElement('li');
        listItem.classList.add('step-list-item');

        const itemCaption = document.createElement('div');
        itemCaption.classList.add('item-caption');
        itemCaption.textContent = this.name;

        const itemSub = document.createElement('div');
        itemSub.classList.add('item-sub');
        itemSub.textContent = this.time;

        listItem.appendChild(itemCaption);
        listItem.appendChild(itemSub);

        return listItem
    }
}


/*array of the stops*/
routes = {}

routes["--none"] = [
    new Destination("Paris", ""),
]

routes["Istanbull"] = [
    new Destination("Paris", ""),
    new Destination("Lausanne", "in 7 hours"),
    new Destination("Milan", "in 1 day and 3 hours"),
    new Destination("Venice", "in 1 day and 7 hours"),
    new Destination("Belgrade", "in 2 days and 17 hours"),
    new Destination("Sofia", "in 2 days and 22 hours"),
    new Destination("Istanbull", "in 3 days and 4 hours")
]

routes["Athens"] = [
    new Destination("Paris", ""),
    new Destination("Zürich", "in 8 hours"),
    new Destination("Innsbruck", "in 12 hours"),
    new Destination("Vienna", "in 21 hours"),
    new Destination("budapest", "in 1 day and 1 hours"),
    new Destination("Belgrade", "in 1 day and 10 hours"),
    new Destination("Athens", "in 2 days"),
]

routes["Belgrade"] = [
    new Destination("Paris", ""),
    new Destination("Lausanne", "in 3 hours"),
    new Destination("Milan", "in 7 hours"),
    new Destination("Venice", "in 14 hours"),
    new Destination("Belgrade", "in 1 day and 9 hours"),
]

routes["Vienna"] = [
    new Destination("Paris", ""),
    new Destination("Strasbourg", "in 7 hours"),
    new Destination("Munich", "in 1 day and 3 hours"),
    new Destination("Vienna", "in 1 day and 7 hours"),
]


let selectedEndCity = "--none"


function createMenu() {


    // Get the UL element
    const stepList = document.querySelector('.steplist')
    stepList.innerHTML = '';

    // Create a new LI element with the dynamically populated content
    let destinations = routes[selectedEndCity]

    console.log(destinations)

    destinations.forEach(destination => {
        const listItem = destination.createListItem();
        stepList.appendChild(listItem);
    });

}


function createDropdown() {

    var selectElement = document.getElementById("dropDown");

    // Populate the select element with options
    for (let key in routes) {
        var option = document.createElement("option");
        option.text = key;
        option.value = key;
        selectElement.add(option);
    }

}
function updateMenu() {
    const dropdown = document.getElementById("dropDown");
    selectedEndCity = dropdown.value;
    createMenu();

    // Get the .interactiveMap_dropdown_right element
    const interactiveMapDropdownRight = document.querySelector('.interactiveMap_dropdown_right');

    // Define the mapping of cities to their respective iframe source URLs
    const cityMappings = {
        '--none': 'https://lottie.host/embed/e034e6a8-f3e7-4bd8-b001-b0407cf6933b/NP9kXVQDWY.json',
        'Istanbull': 'https://lottie.host/embed/b7bffbb4-f578-4c3b-821b-4b01928c1194/PRrsZakPDG.json',
        'Athens': 'https://lottie.host/embed/c072b55d-8fdd-4f78-86de-4711fc03e563/FrmG0hc58R.json',
        'Belgrade': 'https://lottie.host/embed/dce9ec65-2415-472b-a13f-2ec41b61b16a/KyVBEg3DO2.json',
        'Vienna': 'https://lottie.host/embed/616cef3a-80ac-4edc-9e17-df7c1eec49fe/Ou8DCxUezB.json'
    };

    // Check if the selected city is in the mapping
    if (selectedEndCity in cityMappings) {
        // Update the inner HTML with the corresponding iframe
        interactiveMapDropdownRight.innerHTML = `<iframe src="${cityMappings[selectedEndCity]}"></iframe>`;
    } else {
        // If the selected city is not in the mapping, clear the inner HTML
        interactiveMapDropdownRight.innerHTML = '';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    createMenu()
    createDropdown()
})
