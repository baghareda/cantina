let entreeButton = document.querySelector("#monday-entree");
let popup = document.querySelector("#pop-up")

entreeButton.addEventListener("click", function ()
{
    console.log("monday entree clikced");
    popup.classList.remove("hidden")
});