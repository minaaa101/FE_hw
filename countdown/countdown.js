// script.js
const openTime = new Date();
openTime.setHours(7, 0, 0, 0);

const closeTime = new Date();
closeTime.setHours(23, 30, 0, 0);

function updateCountdown() {
    const now = new Date();
    const countdownEl = document.getElementById("countdown");

    if (now < openTime) {
        const diff = openTime - now;
        countdownEl.textContent = `금일 오픈까지 남은 시간\n${formatTime(diff)}`;
    } else if (now >= openTime && now < closeTime) {
        const diff = closeTime - now;
        countdownEl.textContent = `금일 마감까지 남은 시간\n${formatTime(diff)}`;
    } else {
        countdownEl.textContent = "금일 마감";
    }
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
return `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
