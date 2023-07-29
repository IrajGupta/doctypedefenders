document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const targetColor = "rgba(0, 0, 0, 0.7)";
    setTimeout(() => {
        overlay.style.backgroundColor = targetColor;
        overlay.style.opacity = 5;
    }, 1000);
});