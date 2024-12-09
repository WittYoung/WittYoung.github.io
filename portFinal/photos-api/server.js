const express = require('express');
const app = express();
const PORT = 3000;

// Mock data: Array of images with titles and dates
const photos = [
    { id: 1, title: "Sunrise in the Mountains", date: "2024-01-01", url: "https://example.com/sunrise.jpg" },
    { id: 2, title: "Cityscape at Night", date: "2024-02-15", url: "https://example.com/cityscape.jpg" },
    { id: 3, title: "Beach Day", date: "2024-03-10", url: "https://example.com/beach.jpg" }
];

// Endpoint to get all photos
app.get('/photos', (req, res) => {
    res.json(photos);
});

// Endpoint to get a photo by ID
app.get('/photos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const photo = photos.find(p => p.id === id);
    if (photo) {
        res.json(photo);
    } else {
        res.status(404).send({ message: "Photo not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
