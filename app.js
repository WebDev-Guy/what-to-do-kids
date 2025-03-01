// Function to pick a random activity, weighted by probability
function pickActivity() {
    let weightedList = []; // Array to hold activities based on their probability weight

    // Loop through each activity and add it to the weighted list multiple times
    activities.forEach(activity => {
        for (let i = 0; i < activity.probability; i++) {
            weightedList.push(activity); // Adds the activity multiple times for higher probability
        }
    });

    // Select a random activity from the weighted list
    const randomIndex = Math.floor(Math.random() * weightedList.length);
    const selectedActivity = weightedList[randomIndex];

    // Get the activity display element
    const activityElement = document.getElementById("activity");

    // Add a flip animation effect before updating the text
    activityElement.classList.add("flip");
    setTimeout(() => {
        activityElement.innerText = `${selectedActivity.text} ${selectedActivity.emoji}`; // Update displayed activity
        activityElement.classList.remove("flip"); // Remove animation class after update
    }, 300);

    // Launch confetti effect when an activity is picked
    launchConfetti();
}

// Function to trigger confetti animation
function launchConfetti() {
    confetti({
        particleCount: 100, // Number of confetti particles
        spread: 160, // Spread angle of the confetti
        origin: { y: 0.6 } // Confetti starts from slightly below the top of the screen
    });
}

// Event listener to detect when the spacebar is pressed
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") { // Check if the key pressed is the spacebar
        const button = document.getElementById("activityButton"); // Get the activity button element
        button.classList.add("active"); // Add an "active" effect when pressed
        pickActivity(); // Call function to select a new activity
        setTimeout(() => button.classList.remove("active"), 300); // Remove the "active" effect after 300ms
    }
});
