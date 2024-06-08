import  dateZone  from "./clock.js";
// SideBar Menus
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

// Contdown timer

function countdown(targetDate){
    const today = new Date();

    const difference =  targetDate - today ;

    if(difference < 0){
        clearInterval(interval);
        document.querySelector('.centerScreen').innerHTML = `<h1 class="text-4xl text-white sm:text-clock font-bold">It's Over, Time's Up!</h1>`;
        return;
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60 ));
    const seconds = Math.floor((difference % (1000 * 60)) / (1000));

    document.getElementById('years').innerText = years.toString().padStart(2, "0");
    document.getElementById('months').innerText = months.toString().padStart(2, "0");
    document.getElementById('days').innerText = days.toString().padStart(2, "0");
    document.getElementById('hours').innerText = hours.toString().padStart(2, "0");
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, "0");
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, "0");

}

const targetDate = new Date('May 30, 2027 23:59:59').getTime();
const interval = setInterval(() => countdown(targetDate), 1000);

// Right Bar
const now = new dateZone();
document.getElementById('date').innerText = now.ddmmmyyyy();
document.getElementById('weekday').innerText = now.weekDayName();
document.getElementById('time').innerText = now.hhmm();