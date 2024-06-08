function countdown(targetDate) {
    const now = new Date();

    const timeDifference = now - targetDate;
    console.log(timeDifference);

    // if (timeDifference < 0) {
    //   // If the target date is in the past
    //   clearInterval(interval);
    //   document.querySelector(".countdown").innerHTML = "<h1>Time's up!</h1>";
    //   return;
    // }

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     document.getElementById("years").innerText = years;
//     document.getElementById("months").innerText = months;
//     document.getElementById("days").innerText = days;
//     document.getElementById("hours").innerText = hours;
//     document.getElementById("minutes").innerText = minutes;
//     document.getElementById("seconds").innerText = seconds;
//   }

//   targetDate = new Date("December 31, 202 23:59:59").getTime();
//   const interval = setInterval(() => countdown(targetDate), 1000);
}
   const targetDate = new Date("December 31, 202 23:59:59").getTime();

countdown(targetDate);