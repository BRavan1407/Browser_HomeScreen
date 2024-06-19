import dateZone from "./clock.js";
// console.log(allEvents);
const currentDate = new Date();

// localStorage.clear();
var allEvents = [];
allEvents = JSON.parse(localStorage.getItem('allEvents') || "[]");



// currentDate.setMonth(1);
// currentDate.setFullYear(2012)

var uniqueId;

// Generating unique ID
function createID (){
    uniqueId = new Date().getTime();
    return uniqueId;
}

// Saving to local Storage
function saveEvents(){
    // try{
    //     localStorage.setItem('allEvents', JSON.stringify(allEvents));
    //     console.log('saved to local storage');
    // }
    // catch (err){
    //     console.log('Error while saving to local storage...',err);
    // }

    try{
        //let existingEvents =JSON.parse(localStorage.getItem('allEvents') || "[]") ;

        //existingEvents.forEach(newEvent => allEvents.push(newEvent));

        localStorage.setItem('allEvents', JSON.stringify(allEvents));
    }
    catch(err){
        console.log('Error while saving', err);
    }
}

// Retrive Task
function retriveEvents(){
    let eventTasks = localStorage.getItem("allEvents");

    return eventTasks ? JSON.parse(eventTasks) : [];
}
console.log(retriveEvents());

// Delete Events
window.deleteEvent = (clickedDate) =>{ 
    allEvents.forEach(some => {
        console.log(some.id);
    })
    
}

// Rendering Calendar
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

    // Prev Month Disabled Dates
    for (let i = days; i > 0; i--) {
        span += `<span class="date text-center text-2xl text-gray-500">${(firstDay - i) + 1}</span>`
    }

    // Running month Dates
    for (let i = 1; i <= daysInmonth; i++) {
    let selectedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth()+1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
        // let selectedDate = `hello`;
        if (i == today.getDate() && currentDate.getMonth() == today.getMonth() && currentDate.getFullYear() == today.getFullYear()) {
            span += `<span class="date text-center text-2xl text-white today cursor-pointer" onclick = 'openEvent("${selectedDate}")'>${i}</span>`;
        }
        else {
            span += `<span class="date text-center text-2xl text-white cursor-pointer" onclick = 'openEvent("${selectedDate}")'>${i}</span>`;
        }
    }

    // Next Month Disabled dates
    for (let i = 1; i <= (6 - lastDay); i++) {
        span += `<span class="date text-center text-2xl text-gray-500">${i}</span>`
    }

    // Display calender
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

// Open Event Planner
window.openEvent = (clickedDate) => {
    // console.log('Clicked Date is :',clickedDate);
    document.querySelector('.event_planner').classList.remove('hidden');
    if(clickedDate){
        document.getElementById('event_date').value = clickedDate;
    }
}

// For Closing eventPlanner Popup
window.closeEvent = () => {
    document.querySelector('.event_planner').classList.add('hidden');
}

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        closeEvent();
    }
})

// Adding Event
window.addEvent = () => {
    const dt = new dateZone();

    let eventContent = document.getElementById('event').value;
    let eventDate = dt.convertToDDMMYYYY(document.getElementById('event_date').value);
    let eventTime = document.getElementById('event_time').value;
    let id = createID();

    allEvents.push({id : id, eventContent : eventContent, eventDate : eventDate, eventTime : eventTime});

    console.log(allEvents);
    
    saveEvents();
    closeEvent();
    
    document.getElementById('event').value = '';
    document.getElementById('event_time').value = '';
}