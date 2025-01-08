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
        button.addEventListener("click", () => {
            const commentBox = button.previousElementSibling;
            const commentList = button.nextElementSibling;

            if (commentBox.value.trim() !== "") {
                const commentItem = document.createElement("li");
                commentItem.textContent = commentBox.value;
                commentList.appendChild(commentItem);
                commentBox.value = ""; // Clear the textarea
            }
        });
    });
});
