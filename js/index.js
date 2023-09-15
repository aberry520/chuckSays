"use strict";

const catList = document.querySelector("#catList");

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";
    getQuote(apiUrl);
    const catUrl = "https://api.chucknorris.io/jokes/categories"
    get(catUrl).then(function (response) {
        makeCatList(response);
        console.log(response);
        response.filter(function(){
            const filter = response.pop("hi");
            console.log(response);
        });
    })

    catList.addEventListener("submit", function (event) {
        event.preventDefault();
        const newCategory = this.querySelector("select").value;
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${newCategory}`;
        getQuote(apiUrl);
    });
    
});

function getQuote (apiUrl){
    get(apiUrl).then(function (response) {
        showQuote(response.value, chuckQuote);
    })
};

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