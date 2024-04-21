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

/**
 * Store movieId in "localStorage" when you click any movie card
 */

const getMovieDetail = function(movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}
