import dateZone from "./clock.js";
// console.log(allEvents);
const currentDate = new Date();
console.log(`${currentDate.getDate()}-${currentDate.getMonth().toString().padStart(2, '0')}-${currentDate.getFullYear()}`);
var allEvents = [];

// currentDate.setMonth(1);
// currentDate.setFullYear(2012)

var uniqueId;

function createID (){
    uniqueId = new Date().getTime();
    return uniqueId;
}

window.renderCalendar = () => {
    const daysInmonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    // console.log(daysInmonth);

    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
    // console.log(lastDay);

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    // console.log(firstDay);

    let today = new Date();
    // console.log(today);

    currentDate.setDate(1);
    const days = currentDate.getDay();
    // console.log(days);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Setting Header
    document.getElementById('calenderHeader').innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Show Calendar
    let span = '';

    // Set first day of month

    for (let i = days; i > 0; i--) {
        span += `<span class="date text-center text-2xl text-gray-500">${(firstDay - i) + 1}</span>`
    }

    for (let i = 1; i <= daysInmonth; i++) {
        // let selectedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth()+1)}-${currentDate.getDate()}`;
        if (i == today.getDate() && currentDate.getMonth() == today.getMonth() && currentDate.getFullYear() == today.getFullYear()) {
            span += `<span class="date text-center text-2xl text-white today cursor-pointer" onclick = 'openEvent(${currentDate.getDate()}-${currentDate.getMonth().toString().padStart(2, '0')}-${currentDate.getFullYear()})'>${i}</span>`;
        }
        else {
            span += `<span class="date text-center text-2xl text-white cursor-pointer" onclick = 'openEvent(${currentDate.getDate()}-${currentDate.getMonth().toString().padStart(2, '0')}-${currentDate.getFullYear()})'>${i}</span>`;
        }
    // console.log(selectedDate);

    }

    for (let i = 1; i <= (6 - lastDay); i++) {
        span += `<span class="date text-center text-2xl text-gray-500">${i}</span>`
    }

    document.getElementById('calendarDates').innerHTML = span;


}

// Add Buttons of Month changer
window.changeMonth = (btn) => {
    if (btn == 'prevMonth') {
        currentDate.setMonth(currentDate.getMonth() - 1);
    }
    else {
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    renderCalendar();
}

window.openEvent = (date) => {
    console.log(date)
    document.querySelector('.event_planner').classList.remove('hidden');
    // if(selectedDate){
    //     document.getElementById('event_date').value = selectedDate;
    // }
}

window.closeEvent = () => {
    document.querySelector('.event_planner').classList.add('hidden');
}

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        closeEvent();
    }
})

window.addEvent = () => {
    const dt = new dateZone();

    let eventContent = document.getElementById('event').value;
    let eventDate = dt.convertToDDMMYYYY(document.getElementById('event_date').value);
    let eventTime = document.getElementById('event_time').value;
    let id = createID();

    // allEvents.push({id : id, eventContent : eventContent, eventDate : eventDate, eventTime : eventTime});

    // console.log(typeof eventDate);
    console.log(allEvents);
    try{
        localStorage.setItem('allEvents', JSON.stringify(allEvents));
        console.log('saved to local storage');
    }
    catch (err){
        console.log('Error while saving to local storage...',err);
    }
    // saveEvents();
    closeEvent();
    
    allEvents.push({id : id, eventContent : eventContent, eventDate : eventDate, eventTime : eventTime});
    
    document.getElementById('event').value = '';
    // document.getElementById('event_date').value = '';
    document.getElementById('event_time').value = '';
}

// function getToday(){
//     console.log('');
// }

function retriveEvents(){
    let eventTasks = localStorage.getItem("allEvents");

    return JSON.parse(eventTasks);
}

console.log(retriveEvents());
console.log(localStorage);
// localStorage.clear();
// function deleteEvent(){
//     console.log(`Deleting task of ${id}`);
// }
// console.log(deleteEvent());