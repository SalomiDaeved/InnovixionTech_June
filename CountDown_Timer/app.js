window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
    console.log("Event listeners set for calculate and reset buttons");
}

let interval = null; // Store interval ID globally to manage it properly

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    console.log(`Date input: ${date}, Time input: ${time}`);

    const endTime = new Date(`${date}T${time}`);
    console.log(`End time: ${endTime}`);

    if (interval) {
        clearInterval(interval); // Clear any existing interval before starting a new one
    }

    interval = setInterval(() => calculateTime(endTime), 1000);

    document.querySelector('#stop').addEventListener('click', () => {
        clearInterval(interval);
        console.log("Interval stopped");
    });
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}

function reset() {
    if (interval) {
        clearInterval(interval); // Clear any running interval
    }
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
    console.log("Countdown reset");
}