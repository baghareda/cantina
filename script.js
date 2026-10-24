let entreeButton = document.querySelectorAll(".entree-button");
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
let mondaydessert = document.querySelector("#monday-dessert-button")
let mondaypara = document.querySelector("#monday-dessert")
let ga3dissir = document.querySelector("#dissir")
let platButton = document.querySelectorAll(".plat-button");
let dessertbutton = document.querySelectorAll(".dessertbutton")

for (let button of entreeButton)
{
   button.addEventListener("click", function ()
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
                let selectedParagraph = button.parentElement.querySelector("p");
                selectedParagraph.textContent = selectechoice;
                popup.classList.add("hidden")
            });
        }
    }); 
}

for (let button of platButton)
{
    button.addEventListener("click", function()
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
                let selectedParagraph = button.parentElement.querySelector("p");
                selectedParagraph.textContent = principalchoice;
                popup.classList.add("hidden")
            });
        }

    });
}


for (let button of dessertbutton)
{
    button.addEventListener("click", function()
    {
        popuprecipes.innerHTML = ""
        popup.classList.remove("hidden")
        popuptitile.textContent = "select your meal"
        ga3dissir.querySelectorAll("div")
        let fruit = ga3dissir.querySelectorAll("div")
        for (let frwi of fruit)
            {
                let cpy = frwi.cloneNode(true)
                popuprecipes.appendChild(cpy)
                cpy.addEventListener("click", function ()
                {
                    let urchoice = cpy.querySelector("h3").textContent
                    let selectedParagraph = button.parentElement.querySelector("p");
                    selectedParagraph.textContent = urchoice;
                    popup.classList.add("hidden")
                });
            }
        });
}


closingButton.addEventListener("click", function()
{
    popup.classList.add("hidden");
});

recipebutton.addEventListener("click", function()
{
    console.log("moroccan soup selected")
    popup.classList.add("hidden");
});
