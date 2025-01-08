document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const likeCount = button.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const textarea = event.target.previousElementSibling;
            if (textarea.value.trim() !== "") {
                alert(`Comment posted: ${textarea.value}`);
                textarea.value = ""; // Clear textarea
            }
        });
    });
});
