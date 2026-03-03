const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const GIF_URL = "https://raw.githubusercontent.com/dino242/Image-logger/refs/heads/main/f1f.gif";

app.get('/image.gif', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    console.log("NEUER LOG!");
    console.log("IP:", ip);
    console.log("UA:", req.headers['user-agent']);

    res.redirect(GIF_URL);
});

app.get('/', (req, res) => {
    res.send("Server läuft, Cheffe!");
});

app.listen(PORT, () => {
    console.log("Server ist bereit.");
});
