// Step 2: Add an event listener for the button
document.getElementById('joke-button').addEventListener('click', getJoke);

// Step 3: Function declaration for getJoke and test button click
function getJoke() {
    console.log("Button clicked!"); // Test button click in the console

    // Step 4: Define API endpoint
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

    // Step 5: Use fetch to call the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.joke) {
                console.log(data.joke); // Output joke to the console
                displayRes(data.joke); // Step 6: Display joke in paragraph
            } else {
                throw new Error("Joke not found");
            }
        })
        .catch(error => {
            console.error("Error fetching the joke:", error);
            alert("Failed to fetch a joke. Please try again.");
        });
}

// Step 6: Function to display the joke in the paragraph
function displayRes(joke) {
    document.getElementById('joke-text').textContent = joke;
}

// Step 7: Display a joke on page load
window.addEventListener('load', getJoke);
