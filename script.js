// Right-click Prevention
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert("Right-click is disabled to protect content.");
});

// Like Button Example (if used in My Work page)
document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });
});
