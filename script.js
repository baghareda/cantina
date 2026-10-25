let entreeButton = document.querySelectorAll(".entree-button");
let popup = document.querySelector("#pop-up")
let closingButton =document.querySelector("#closing-button")
let popuptitile = document.querySelector("#pop-up-title")
let recipebutton = document.querySelector("#recipe-choice")
let popuprecipes = document.querySelector("#pop-up-recepies")
let platButton = document.querySelectorAll(".plat-button");
let dessertbutton = document.querySelectorAll(".dessertbutton")
let dailyBudget = document.querySelector("#daily-budget");

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
                let selectedPrice = parseInt(mealCopy.querySelector("p").textContent);
                let selectedParagraph = button.parentElement.querySelector("p");
                let oldPrice = Number(selectedParagraph.dataset.price || 0);
                let proposedTotal = 0;
                let dayCard = button.parentElement.parentElement;
                let slots = dayCard.querySelectorAll(".bg-green-50");

                for (let slot of slots)
                {
                    let price = Number(slot.querySelector("p").dataset.price || 0);
                    proposedTotal = proposedTotal + price;
                }

                proposedTotal = proposedTotal - oldPrice + selectedPrice;
                if (proposedTotal > 50)
                {
                    alert("Your daily budget cannot exceed 50 DH!");
                    return;
                }
                dailyBudget.textContent = proposedTotal + " / 50 DH";
                popup.classList.add("hidden")
                selectedParagraph.textContent = selectechoice + " - " + selectedPrice + " DH";
                selectedParagraph.dataset.price = selectedPrice;
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
                let selectedPrice = parseInt(copy.querySelector("p").textContent);
                let selectedParagraph = button.parentElement.querySelector("p");
                let oldPrice = Number(selectedParagraph.dataset.price || 0);
                let dayCard = button.parentElement.parentElement;
                let slots = dayCard.querySelectorAll(".bg-green-50");
                let proposedTotal = 0;

                for (let slot of slots)
                {
                    let price = Number(slot.querySelector("p").dataset.price || 0);
                    proposedTotal = proposedTotal + price;
                }
                proposedTotal = proposedTotal - oldPrice + selectedPrice;
                if (proposedTotal > 50)
                {
                    alert("Your daily budget cannot exceed 50 DH!");
                    return;
                }
                selectedParagraph.textContent = principalchoice + " - " + selectedPrice + " DH";
                selectedParagraph.dataset.price = selectedPrice;
                dailyBudget.textContent = proposedTotal + " / 50 DH";
                popup.classList.add("hidden")
            });
        }

    });
}


for (let button of dessertbutton)
{
    button.addEventListener("click", function()
    {
        popuprecipes.innerHTML = "";
        popup.classList.remove("hidden");
        popuptitile.textContent = "select your meal";

        let fruit = ga3dissir.querySelectorAll("div");

        for (let frwi of fruit)
        {
            let cpy = frwi.cloneNode(true);
            popuprecipes.appendChild(cpy);

            cpy.addEventListener("click", function()
            {
                let urchoice = cpy.querySelector("h3").textContent;
                let selectedPrice = parseInt(cpy.querySelector("p").textContent);
                let selectedParagraph = button.parentElement.querySelector("p");

                let oldPrice = Number(selectedParagraph.dataset.price || 0);
                let dayCard = button.parentElement.parentElement;
                let slots = dayCard.querySelectorAll(".bg-green-50");
                let proposedTotal = 0;

                for (let slot of slots)
                {
                    let price = Number(slot.querySelector("p").dataset.price || 0);
                    proposedTotal = proposedTotal + price;
                }

                proposedTotal = proposedTotal - oldPrice + selectedPrice;

                if (proposedTotal > 50)
                {
                    alert("Your daily budget cannot exceed 50 DH!");
                    return;
                }

                selectedParagraph.textContent = urchoice + " - " + selectedPrice + " DH";
                selectedParagraph.dataset.price = selectedPrice;
                dailyBudget.textContent = proposedTotal + " / 50 DH";
                popup.classList.add("hidden");
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
