// Add Event On Multiple Elements 

const addEventsOnElements = function (elements, eventType, callback) {

    for (const elem of elements) elem.addEventListener(eventType,callback);
}

// Toggle Search Box for Mobile 

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventsOnElements(searchTogglers, "click", function () {
searchBox.classList.toggle("active");
})
