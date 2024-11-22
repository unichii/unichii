// References to DOM elements
const muahcat = document.querySelector("#muahcat");
const btn = document.querySelector("#btn");

// The two images of the POP CAT
const openMouthImg = "https://i.pinimg.com/564x/d6/e6/a4/d6e6a42b948e4caaaa6d01c7d46e12dd.jpg";
const closeMouthImg = "https://preview.redd.it/help-me-find-this-image-v0-tl3jd8ompsbd1.png?auto=webp&s=3bfebea0d49bd770787d683fd217b5c777a9d646";

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handlers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
});

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
});

function openMouth() {
    console.log("Mouth Opened");
    muahcat.src = openMouthImg;
}

function closeMouth() {
    console.log("Mouth Closed");
    muahcat.src = closeMouthImg;
}
