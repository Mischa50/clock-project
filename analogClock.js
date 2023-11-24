const seconds = document.querySelector(".second-hand")

const minutes = document.querySelector(".min-hand")

const houres = document.querySelector(".hour-hand")

setInterval(() => {
    const date = new Date()

    const secondGrad = (date.getSeconds() / 60) * 360 - 90
    seconds.style.transform = `rotate(${secondGrad}Deg)`

    const minuteGrad = (date.getMinutes() / 60) * 360 - 90
    minutes.style.transform = `rotate(${minuteGrad}Deg)`

    const hourGrad = (date.getHours() / 12) * 360 - 90
    houres.style.transform = `rotate(${hourGrad}Deg)`

}, 1000)
