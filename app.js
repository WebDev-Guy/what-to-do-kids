// Sound state
let soundEnabled = true;
let audioContext = null;

// Lazily create AudioContext (must be triggered by user gesture)
function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// Play a fun "pop" sound when the button is clicked
function playClickSound() {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
}

// Play a celebratory chime when confetti launches
function playConfettiSound() {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + i * 0.08 + 0.3);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.3);
    });
}

// Toggle mute/unmute
function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById("muteButton");
    btn.innerText = soundEnabled ? "🔊" : "🔇";
    btn.title = soundEnabled ? "Mute sounds" : "Unmute sounds";
}

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

    // Get the activity display elements
    const activityElement = document.getElementById("activity");
    const emojiElement = document.getElementById("emoji");

    // Play click sound
    playClickSound();

    // Add a flip animation effect before updating the text
    activityElement.classList.add("flip-animate");
    emojiElement.classList.add("flip-animate");

    setTimeout(() => {
        // Update content at the middle of the animation (when elements are rotated 90 degrees)
        activityElement.innerText = selectedActivity.text;
        emojiElement.innerText = selectedActivity.emoji;
    }, 300); // Update content halfway through the animation

    setTimeout(() => {
        // Remove animation classes after the animation completes
        activityElement.classList.remove("flip-animate");
        emojiElement.classList.remove("flip-animate");
    }, 600); // Remove classes after full animation duration

    // Launch confetti effect when an activity is picked
    launchConfetti();
}

// Function to trigger confetti animation
function launchConfetti() {
    playConfettiSound();
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
