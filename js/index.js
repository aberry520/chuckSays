"use strict";
// const chuckQuote = document.querySelector("#chuckQuote");
// const newQuote = document.querySelector("#newQuote");

// document.addEventListener("DOMContentLoaded", function(){
//     const fetchQuote = fetch("https://api.chucknorris.io/jokes/random?category=dev");
//     const quoteResponse = fetchQuote.then(function(response){
//         return response.json();
//     });
//     const jsonResponse = quoteResponse.then(function(data){
//         console.log(data);
//         showQuote(data.value, chuckQuote)
//         return data;
//     })
// });
///////////above is the same as below////////////
document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        showQuote(data.value, chuckQuote)
        console.log(data);
        return data;
    })
});

function showQuote(quote, element){
    element.innerText = quote;
}






/////////extra add button//////////////
newQuote.addEventListener("click", function(){
    history.go(0);
})
console.log(chuckQuote)