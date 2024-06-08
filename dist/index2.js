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

function clock(){
    const today = new Date();


 

   
    const hours = Math.floor(today.getHours());
    const minutes = Math.floor(today.getMinutes());
    const seconds = Math.floor(today.getSeconds()) ;

    
    document.getElementById('r.hours').innerText = hours.toString().padStart(2, "0");
    document.getElementById('r.minutes').innerText = minutes.toString().padStart(2, "0");
    document.getElementById('r.seconds').innerText = seconds.toString().padStart(2, "0");


}

const interval = setInterval(() => clock(), 1000);

// Right Bar
const now = new dateZone();
document.getElementById('date').innerText = now.ddmmmyyyy();
document.getElementById('weekday').innerText = now.weekDayName();