// script.js

document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.querySelector('.post-form');
    const feed = document.querySelector('.feed');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the input value from the textarea
        const thoughtInput = postForm.querySelector('textarea').value;

        // Create a new tweet element
        const newTweet = document.createElement('div');
        newTweet.className = 'tweet';

        // Structure of the new tweet element
        newTweet.innerHTML = `
            <div class="image-content">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png" alt="Profile">
                <div>
                    <p><b>Your Name</b><i> @yourusername</i></p>
                </div>
            </div>
            <div>
                <p>${thoughtInput}</p>
                <!-- Like and comment icons would go here -->
            </div>
        `;

        // Add the new tweet to the feed
        feed.appendChild(newTweet);

        // Clear the textarea after posting
        postForm.querySelector('textarea').value = '';
    });
});

