const recipes = {
    "breakfast": "Oatmeal with fruits and nuts",
    "lunch": "Grilled chicken salad",
    "dinner": "Spaghetti with marinara sauce",
    "snack": "Greek yogurt with honey and berries"
};

const suggestButton = document.getElementById("suggestButton");
const mealInput = document.getElementById("mealInput");
const recipeSuggestion = document.getElementById("recipeSuggestion");

suggestButton.addEventListener("click", () => {
    const inputMeal = mealInput.value.toLowerCase();
    const suggestedRecipe = recipes[inputMeal];

    if (suggestedRecipe) {
        recipeSuggestion.textContent = `For ${inputMeal}, we suggest: ${suggestedRecipe}.`;
    } else {
        recipeSuggestion.textContent = `Sorry, we don't have a suggestion for ${inputMeal}.`;
    }
});
