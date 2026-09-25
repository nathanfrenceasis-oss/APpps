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


window.addEventListener('load', () => {

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

    
  let installPrompt;
  const installBtn = document.getElementById("install-btn");

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
    if (installBtn) installBtn.style.display = "block";
  });

  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!installPrompt) return;
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      installPrompt = null;
      installBtn.style.display = "none";
    });
  }
});
