const today = new Date();
today.setHours(0, 0, 0, 0);

let startDate = localStorage.getItem("startDate");

if (!startDate) {
    startDate = today.getTime();
    localStorage.setItem("startDate", startDate);
}

function getCurrentDay() {
    const difference = today.getTime() - Number(startDate);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return Math.min(days + 1, 30);
}

function updateHomeDay() {
    const currentDay = getCurrentDay();

    const dayBadge = document.getElementById("home-day-badge");

    if (dayBadge) {
        dayBadge.textContent = "✨ Day " + currentDay + " ✨";
    }
}

updateHomeDay();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}

let installPrompt;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;

    document.getElementById("install-btn").style.display = "block";
});

document.getElementById("install-btn").addEventListener("click", async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    installPrompt = null;
});
