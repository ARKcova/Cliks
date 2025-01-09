// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Like Button Functionality
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1; // Increment like count
        });
    });

    // Comment Button Functionality
    const commentButtons = document.querySelectorAll(".comment-btn");

    commentButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const textarea = event.target.previousElementSibling; // Get the associated textarea
            if (textarea.value.trim() !== "") {
                alert(`Comment posted: ${textarea.value}`); // Display the comment
                textarea.value = ""; // Clear textarea after posting
            } else {
                alert("Please write a comment before posting!"); // Alert if the textarea is empty
            }
        });
    });
});

// Disable right-click context menu for the whole page
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert("Right-click is disabled to protect the photos.");
});

// Prevent dragging of images
document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});
