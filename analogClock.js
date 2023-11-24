// Gets the DOM elements for the clock hands
const seconds = document.querySelector(".second-hand");
const minutes = document.querySelector(".min-hand");
const hours = document.querySelector(".hour-hand");

// Sets an interval to update the time
setInterval(() => {
    // Gets the current date and time
    const date = new Date();

    // Calculates the degree of the second hand based on seconds
    const secondDeg = (date.getSeconds() / 60) * 360 - 90;
    // Sets the transformation rule for the second hand
    seconds.style.transform = `rotate(${secondDeg}Deg)`;

    // Calculates the degree of the minute hand based on minutes
    const minuteDeg = (date.getMinutes() / 60) * 360 - 90;
    // Sets the transformation rule for the minute hand
    minutes.style.transform = `rotate(${minuteDeg}Deg)`;

    // Calculates the degree of the hour hand based on hours
    const hourDeg = (date.getHours() / 12) * 360 - 90;
    // Sets the transformation rule for the hour hand
    hours.style.transform = `rotate(${hourDeg}Deg)`;

}, 1000);
