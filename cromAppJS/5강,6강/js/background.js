const images = ["AUS__0112.jpg", "AUS__0115.jpg", "AUS__0116.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

bgImage.style.width = "500px";

document.body.appendChild(bgImage);