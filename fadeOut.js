document.addEventListener("DOMContentLoaded", function () {
    let countdownInterval;

    // Function to format time as MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    // Function to start the fading effect
    function startFade(minutes) {
        let startTime = new Date().getTime();
        let endTime = startTime + minutes * 60000; // Calculate the end time in milliseconds
        let totalSeconds = minutes * 60; // Total duration in seconds

        // Update the countdown timer every second
        countdownInterval = setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = endTime - now;
            let secondsLeft = Math.floor(timeLeft / 1000);
            let opacity = Math.max(timeLeft / (minutes * 60000), 0);

            document.body.style.opacity = opacity;
            document.getElementById("timer").textContent = formatTime(secondsLeft);

            // Stop the interval when time is up
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                document.body.style.opacity = 0;
                document.body.style.pointerEvents = "none";
                document.getElementById("timer").textContent = "00:00";
            }
        }, 1000);
    }

    // Handle the click event to start the fading effect
    document.getElementById("startFade").addEventListener("click", function () {
        let fadeMinutes = parseInt(document.getElementById("fadeMinutes").value, 10);

        if (isNaN(fadeMinutes) || fadeMinutes < 1) {
            alert("Please enter a valid number of minutes.");
        } else {
            if (countdownInterval) {
                clearInterval(countdownInterval); // Clear any existing interval
            }
            startFade(fadeMinutes);
        }
    });
});
