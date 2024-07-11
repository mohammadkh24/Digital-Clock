// Get Element
var clock = document.querySelector("#clock");


// set time
setInterval(() => {
    const currentDate = new Date();
    var secondRatio = currentDate.getSeconds();
    var minuteRatio = currentDate.getMinutes();
    var hourRatio = currentDate.getHours();
    var dayNight = "AM"
    if (hourRatio > 12 ) {
        dayNight = "PM"
        hourRatio = hourRatio - 12
    }
    if (hourRatio < 10) {
        hourRatio = "0" + hourRatio;
    }
    if (minuteRatio < 10) {
        minuteRatio = "0" + minuteRatio;
    }
    if (secondRatio < 10) {
        secondRatio = "0" + secondRatio;
    }
    clock.textContent = hourRatio + " : " + minuteRatio + " : " + secondRatio +" " + dayNight;
}, 1000)