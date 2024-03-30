const addCaloriesButton = document.getElementById("addCalories");
const totalCaloriesDisplay = document.getElementById("totalCalories");
const goalCaloriesDisplay = document.getElementById("goalCalories");
const progressBar = document.getElementById("progressBar");

let totalCalories = 0;
const goalCalories = parseInt(goalCaloriesDisplay.textContent);

addCaloriesButton.addEventListener("click", () => {
    const caloriesToAdd = parseInt(prompt("Enter calories consumed:"));
    if (!isNaN(caloriesToAdd) && caloriesToAdd > 0) {
        totalCalories += caloriesToAdd;
        updateProgress();
    } else {
        alert("Please enter a valid number of calories.");
    }
});

function updateProgress() {
    totalCaloriesDisplay.textContent = totalCalories;
    const progressPercentage = (totalCalories / goalCalories) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (progressPercentage >= 100) {
        progressBar.style.backgroundColor = "red";
    } else {
        progressBar.style.backgroundColor = "#007bff";
    }
}

updateProgress();
