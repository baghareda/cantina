let entreeButton = document.querySelector("#monday-entree");
let popup = document.querySelector("#pop-up")
let closingButton =document.querySelector("#closing-button")
let popuptitile = document.querySelector("#pop-up-title")
let recipebutton = document.querySelector("#recipe-choice")
let entreerecipe = document.querySelector("#entree-recipes")
let popuprecipes = document.querySelector("#pop-up-recepies")
let modayentreeselction = document.querySelector("#monday-entree-selected") 
let mondayplat = document.querySelector("#monday-plat")
let platra2issi = document.querySelector("#plat-raissi")
let mondayplatselection = document.querySelector("#monday-plat-principal")

entreeButton.addEventListener("click", function ()
{
    console.log("monday entree clikced");
    popup.classList.remove("hidden")
    popuptitile.textContent = "select your meal"
    entreerecipe.querySelectorAll("div")
    console.log(entreerecipe.querySelectorAll("div").length)
    popuprecipes.innerHTML = ""

    let meals = entreerecipe.querySelectorAll("div")
    for (let meal of meals) 
    {
        let mealCopy = meal.cloneNode(true)
        popuprecipes.appendChild(mealCopy)
        mealCopy.addEventListener("click", function()
        {
            let selectechoice = mealCopy.querySelector("h3").textContent
            modayentreeselction.textContent = selectechoice
            popup.classList.add("hidden")
        });
    }
});

mondayplat.addEventListener("click", function()
{
    popuprecipes.innerHTML = ""
    popup.classList.remove("hidden")
    popuptitile.textContent = "select your meal"
    platra2issi.querySelectorAll("div")
    let wajabat = platra2issi.querySelectorAll("div")
    for (let wajba of wajabat)
    {
        let copy = wajba.cloneNode(true)
        popuprecipes.appendChild(copy)
        copy.addEventListener("click", function()
        {
            let principalchoice = copy.querySelector("h3").textContent
            mondayplatselection.textContent = principalchoice
            popup.classList.add("hidden")
        });
    }

});

closingButton.addEventListener("click", function()
{
    popup.classList.add("hidden");
});

recipebutton.addEventListener("click", function()
{
    console.log("moroccan soup selected")
    popup.classList.add("hidden");
});
