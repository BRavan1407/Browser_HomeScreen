// console.log('Hello Ballu!');

class dateZone {
    constructor() {
        this.date = new Date();
        this.day = this.date.getDate().toString().padStart(2, "0");
        this.month = (this.date.getMonth() + 1).toString().padStart(2, "0");
        this.year = this.date.getFullYear();
        this.weekDay = this.date.getDay();
        this.hours = this.date.getHours().toString().padStart(2, "0");
        this.minutes = this.date.getMinutes().toString().padStart(2, "0");
        this.seconds = this.date.getSeconds().toString().padStart(2, "0");
        // console.log(this.date);
    }

    dd_mm_yyyy() {
        return `${this.day}-${this.month}-${this.year}`;
    }

    ddmmyyyy() {
        return `${this.day}/${this.month}/${this.year}`;
    }

    dd_mm_yy() {
        return `${this.day}-${this.month}-${this.year.toString().slice(2)}`;
    }

    ddmmmyyyy() {
        if(this.month === '01'){
            this.month = 'January';
        }
        else if (this.month === '02'){
            this.month = 'February';
        }
        else if (this.month === '03'){
            this.month = 'March';
        }
        else if (this.month === '04'){
            this.month = 'April';
        }
        else if (this.month === '05'){
            this.month = 'May';
        }
        else if (this.month === '06'){
            this.month = 'June';
        }
        else if (this.month === '07'){
            this.month = 'July';
        }
        else if (this.month === '08'){
            this.month = 'August';
        }
        else if (this.month === '09'){
            this.month = 'September';
        }
        else if (this.month === '10'){
            this.month = 'October';
        }
        else if (this.month === '11'){
            this.month = 'November';
        }
        else if (this.month === '12'){
            this.month = 'December';
        }

        return `${this.day} ${this.month} ${this.year}`;
    }

    weekDayName() {
        if(this.weekDay === 1){
            this.weekDay = 'Monday';
        }
        else if (this.weekDay === 2){
            this.weekDay = 'Tuesday';
        }
        else if (this.weekDay === 3){
            this.weekDay = 'Wednesday';
        }
        else if(this.weekDay === 4){
            this.weekDay = 'Thursday';
        }
        else if (this.weekDay === 5){
            this.weekDay = 'Friday';
        }
        else if (this.weekDay === 6){
            this.weekDay = 'Saturday';
        }
        else if (this.weekDay === 7){
            this.weekDay = 'Sunday';
        }

        return `${this.weekDay}`;
    }

    ddmmyy() {
        return `${this.day}/${this.month}/${this.year.toString().slice(2)}`
    }

    hhmm() {
        return `${this.hours}:${this.minutes}`;
    }

    hhmmss() {
        return `${this.hours}:${this.minutes}:${this.seconds}`
    }

    calculateCustomYears(from,to) {
        if(typeof from !== 'number' || typeof to !== 'number'){
            throw new Error('Both numbers must be numbers');
        }

        const totalYears = to - from;

        return totalYears;
    }

    calculateYears(from) {
        if(typeof from !== 'number') {
            throw new Error('Year must be a number');
        }

        const totalYears = this.year - from;

        return totalYears;
    }

    
}

const today = new dateZone();
// console.log(today.day);
// console.log(today.month);
// console.log(today.year);
// console.log(today.dd_mm_yyyy());
// console.log(today.ddmmyyyy());
// console.log(today.dd_mm_yy());
// console.log(today.ddmmyy());
// console.log(today.ddmmmyyyy());
console.log(today.weekDayName());

// console.log('------------------------');

// console.log(today.hours);
// console.log(today.minutes);
// console.log(today.seconds);
// console.log(today.hhmm());
// console.log(today.hhmmss());

// console.log(today.calculateCustomYears('asss',2342));

// const now = new Date();
// const targetDate = new Date("December 31, 2023 23:59:59");
// console.log(now);
// console.log(targetDate);

export default dateZone;