"use strict";

const catList = document.querySelector("#catList");

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";
    get(apiUrl).then(function (response) {
        showQuote(response.value, chuckQuote);
    })
    const catUrl = "https://api.chucknorris.io/jokes/categories"
    get(catUrl).then(function (response) {
        makeCatList(response);
    })
});

function showQuote(quote, element) {
    element.innerText = quote;
}
function makeCatList(catArr) {
    const createSelect = document.createElement("select");
    catArr.map(function (category) {
        //create an option element
        const option = document.createElement("option");
        //define option attributes
        option.value = category;
        option.text = category;
        // append the option to the <select>
        createSelect.appendChild(option);
    });
    // append the select to the form
    catList.append(createSelect);
};

catList.addEventListener("submit", function () {
    
});




/////////extra add button//////////////
newQuote.addEventListener("click", function () {
    history.go(0);
})