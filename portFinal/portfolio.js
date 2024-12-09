let portfolioData = [];

// Function to fetch and initialize data
function fetchPortfolioData() {
    fetch("portfolio.json") // Path to your JSON file
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch portfolio data");
            }
            return response.json();
        })
        .then((data) => {
            portfolioData = data;
            displayRandomPortfolioItem(); // Display a random item on page load
        })
        .catch((error) => console.error("Error loading portfolio data:", error));
}

// Function to display a random portfolio item
function displayRandomPortfolioItem() {
    if (portfolioData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * portfolioData.length);
    const selectedItem = portfolioData[randomIndex];

    const imageElement = document.getElementById("portfolio-image");
    const captionElement = document.getElementById("portfolio-caption");

    imageElement.src = selectedItem.src;
    imageElement.alt = selectedItem.alt;
    captionElement.textContent = selectedItem.caption;
}

// Fetch data on load
fetchPortfolioData();

// Add event listener for the button
document.getElementById("generate").addEventListener("click", displayRandomPortfolioItem);
