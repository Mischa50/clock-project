# Clock Project

This project features a simple analog clock created using HTML, CSS, and JavaScript. The clock includes hour, minute, and second hands that move dynamically to reflect the current time.

## HTML Structure

- `<!DOCTYPE html>`: Defines the document type and version.
- `<html lang="de-CH">`: Specifies the document language as German (Switzerland).
- `<head>`: Contains metadata and links to external resources.
  - `<meta name="author" content="Reto Froelicher" />`: Indicates the author of the document.
  - `<meta name="description" content="Analog clock with pointers for hour, minute, and second moved by javascript" />`: Provides a brief description of the document's content.
  - `<meta charset="UTF-8" />`: Declares the character encoding as UTF-8.
  - `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`: Ensures compatibility with Internet Explorer.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Sets the viewport for responsive design.
  - `<link rel="stylesheet" type="text/css" href="style.css" />`: Links to the external CSS file (`style.css`).
  - `<title>Analoge Uhr</title>`: Sets the title of the document.

- `<div class="clock">`: Wraps the entire clock element.
  - `<div class="outer-clock-face">`: Represents the outer part of the clock.
    - `<div class="marking marking-one"></div>`: Clock marking element.
    - `<div class="marking marking-two"></div>`: Clock marking element.
    - `<div class="marking marking-three"></div>`: Clock marking element.
    - `<div class="marking marking-four"></div>`: Clock marking element.
    - `<div class="inner-clock-face">`: Represents the inner part of the clock.
      - `<div class="hand hour-hand"></div>`: Hour hand of the clock.
      - `<div class="hand min-hand"></div>`: Minute hand of the clock.
      - `<div class="hand second-hand"></div>`: Second hand of the clock.

- `<script src="analogClock.js"></script>`: References the JavaScript file (`analogClock.js`) responsible for updating the clock hands dynamically.

## CSS Styles

### General Reset Styles

- `*`: Resets default margin, padding, and sets the box-sizing to border-box for all elements.

### Clock Centering

- `.clock`: Styles the clock container.
  - `display: flex;`: Enables flexbox layout.
  - `justify-content: center;`: Horizontally centers the clock.
  - `align-items: center;`: Vertically centers the clock.
  - `height: 100vh;`: Sets the height to 100% of the viewport height.

### Outer Clock Face Styles

- `.outer-clock-face`: Styles the outer part of the clock.
  - `height: 60vh;`: Sets the height of the outer clock face.
  - `width: 90%;`: Sets the width of the outer clock face.
  - `max-width: 60vh;`: Sets the maximum width of the outer clock face.
  - `border-radius: 50%;`: Rounds the corners to create a circular shape.
  - `position: relative;`: Allows positioning of child elements.
  - `background-image: url("img/clock2.png");`: Sets the background image.
  - `background-position: center;`: Centers the background image.
  - `background-size: contain;`: Ensures the background image is contained within the element.
  - `background-repeat: no-repeat;`: Prevents background image repetition.
  - `box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);`: Adds a box shadow for a depth effect.
  - `transition: box-shadow 0.3s ease-in-out;`: Adds a smooth transition for the box shadow.

### Clock Hand Styles

- `.hand`: Styles the clock hands (common style for hour, minute, and second hands).
  - `position: absolute;`: Positions the hands within the clock.
  - `top: 50%; left: 50%;`: Centers the hands within the clock.
  - `height: 7px; width: 20%;`: Sets the dimensions of the hands.
  - `background-color: black;`: Sets the color of the hands.
  - `border-radius: 50%;`: Rounds the corners to create a circular shape.
  - `transform: rotate(-90deg);`: Initial rotation to point upwards.
  - `transform-origin: left;`: Specifies the rotation origin.
  - `transition: transform 0.5s ease-in-out;`: Adds a smooth transition for hand rotation.

### Hour Hand Styles

- `.hour-hand`: Specific styles for the hour hand.
  - `width: 16%;`: Adjusts the width of the hour hand.
  - `border-radius: 75%;`: Rounds the corners for a tapered effect.

### Second Hand Styles

- `.second-hand`: Specific styles for the second hand.
  - `background-color: red;`: Sets the color of the second hand.
  - `width: 18%;`: Adjusts the width of the second hand.
  
## JavaScript Code

### Element Selection

- `const seconds = document.querySelector(".second-hand");`: Retrieves the DOM element representing the second hand.
- `const minutes = document.querySelector(".min-hand");`: Retrieves the DOM element representing the minute hand.
- `const hours = document.querySelector(".hour-hand");`: Retrieves the DOM element representing the hour hand.

### Time Update Interval

- `setInterval(() => { ... }, 1000);`: Sets up an interval to update the clock hands every second.

### Time Calculation and Hand Rotation

- `const date = new Date();`: Gets the current date and time.
- `const secondDeg = (date.getSeconds() / 60) * 360 - 90;`: Calculates the degree of the second hand based on seconds.
  - `seconds.style.transform = `rotate(${secondDeg}Deg)`;`: Sets the transformation rule for the second hand.
- `const minuteDeg = (date.getMinutes() / 60) * 360 - 90;`: Calculates the degree of the minute hand based on minutes.
  - `minutes.style.transform = `rotate(${minuteDeg}Deg)`;`: Sets the transformation rule for the minute hand.
- `const hourDeg = (date.getHours() / 12) * 360 - 90;`: Calculates the degree of the hour hand based on hours.
  - `hours.style.transform = `rotate(${hourDeg}Deg)`;`: Sets the transformation rule for the hour hand.