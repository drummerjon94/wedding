document.addEventListener("DOMContentLoaded", function() {
    // GSAP animation for the image zoom effect
    gsap.from(".reveal-image", {
        duration: 5,
        scale: 0.1,
        opacity: 0,
        ease: "power2.out"
    });

    // Remove fireworks after animation
    setTimeout(() => {
        document.querySelector(".fireworks").remove();
    }, 5000); // Match the duration of the fireworks animation
});
