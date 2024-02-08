document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevents the default form submission

        // Get the textarea value
        const commentInput = document.getElementById("commentInput");
        const commentText = commentInput.value;

        if (commentText.trim() !== "") {
            // Create a new comment element
            const newComment = document.createElement("div");
            newComment.classList.add("tweet");

            // Create the structure of the comment
            newComment.innerHTML = `
                <div class="image-content">
                    <div>
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png" alt="Profile">
                    </div>
                    <div id="tweet1-Text">
                        <p><b>Your Name</b><i>    @yourusername</i></p>
                    </div>
                </div>
                <div id="text">
                    <p>${commentText}</p>
                </div>
            `;

            // Append the new comment to the feed
            const feed = document.getElementById("feed");
            feed.appendChild(newComment);

            // Clear the textarea
            commentInput.value = "";
        }
    }

    // Attach the form submission handler to the form
    const postForm = document.getElementById("postForm");
    postForm.addEventListener("submit", handleFormSubmission);
});
