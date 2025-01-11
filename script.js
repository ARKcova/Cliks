document.addEventListener("DOMContentLoaded", () => {
    // Lightbox setup
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".image-container img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightboxImg.src = "";
        }
    });

    // Like Button Setup
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });
});

// Right-click Prevention
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert("Right-click is disabled to protect content.");
});
