// Image Slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();

// Falling Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let randomPosition = Math.random() * window.innerWidth;
    heart.style.left = randomPosition + "px";
    heart.style.top = "-10px";

    let duration = Math.random() * 3 + 2;
    heart.style.animation = `fall ${duration}s linear`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
setInterval(createHeart, 500);

// Love Box Toggle
document.getElementById("loveButton").addEventListener("click", function () {
    let loveBox = document.getElementById("loveBox");
    loveBox.style.display = "block";
    loveBox.style.opacity = "0";
    setTimeout(() => {
        loveBox.style.opacity = "1";
    }, 100);
});
