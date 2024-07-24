document.getElementById("setReminder").addEventListener("click", function() {
    const mealTimeInput = document.getElementById("mealTime");
    const reminderMessage = document.getElementById("reminderMessage");

    if (mealTimeInput.value) {
        const mealTime = mealTimeInput.value;
        const currentTime = new Date();
        const selectedTime = new Date(currentTime.toDateString() + " " + mealTime);

        if (selectedTime > currentTime) {
            const timeDifference = selectedTime - currentTime;
            const minutes = Math.floor((timeDifference / 1000) / 60);

            reminderMessage.textContent = `Your meal will be ready in ${minutes} minutes.`;
        } else {
            reminderMessage.textContent = "Please select a time in the future.";
        }
    } else {
        reminderMessage.textContent = "Please select a valid meal time.";
    }
});
