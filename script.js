
let popup = document.querySelector("#pop-up");
let title = document.querySelector("#pop-up-title");
let choices = document.querySelector("#pop-up-recepies");
let close = document.querySelector("#closing-button");
let budget = document.querySelector("#daily-budget");
let weeklybudhet = document.querySelector("#weekly-budget");

function openPopup(button, bank, category)
{
    popup.classList.remove("hidden");
    title.textContent = "Choose " + category;
    choices.innerHTML = "";

    for (let meal of bank.children)
    {
        let choice = document.createElement("button");
        let name = meal.querySelector("h3").textContent;
        let price = parseInt(meal.querySelector("p").textContent);

        choice.textContent = name + " — " + price + " DH";
        choice.classList.add("block", "w-full", "text-left", "p-3",
            "mb-2", "rounded-lg", "border", "border-green-200",
            "hover:bg-green-50");

        choices.appendChild(choice);

        choice.addEventListener("click", function()
        {
            let slot = button.parentElement;
            let selected = slot.querySelector("p");
            let day = slot.parentElement.parentElement;
            let total = 0;
            
            for (let box of day.querySelectorAll(".bg-green-50"))
            {
                let meal = box.querySelector("p");
                total += Number(meal.dataset.price || 0);
            }

            total = total - Number(selected.dataset.price || 0) + price;

            if (total > 50)
            {
                alert("Daily budget cannot exceed 50 DH!");
                return;
            }

            let weeklytotal = 0;
            let slots = document.querySelectorAll("#weekly-planer .bg-green-50");

            for (let box of slots)
            {
                let meal = box.querySelector("p");
                weeklytotal += Number(meal.dataset.price || 0);
            }

            weeklytotal = weeklytotal - Number(selected.dataset.price || 0) + price;

            selected.textContent = name + " - " + price + " DH";
            selected.dataset.price = price;
            weeklybudhet.textContent = weeklytotal + " / 250 dh"
            popup.classList.add("hidden");
        });
    }
}

for (let button of document.querySelectorAll(".entree-button"))
{
    button.addEventListener("click", function()
    {
        openPopup(button, document.querySelector("#entree-recipes"), "Entrée");
    });
}

for (let button of document.querySelectorAll(".plat-button"))
{
    button.addEventListener("click", function()
    {
        openPopup(button, document.querySelector("#plat-raissi"), "Plat principal");
    });
}

for (let button of document.querySelectorAll(".dessertbutton"))
{
    button.addEventListener("click", function()
    {
        openPopup(button, document.querySelector("#dissir"), "Dessert");
    });
}

close.addEventListener("click", function()
{
    popup.classList.add("hidden");
});
