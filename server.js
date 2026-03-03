const express = require('express');
const app = express();
const PORT = 3000;

const GIF_URL = "https://i.kym-cdn.com/photos/images/original/003/153/306/f1f.gif";

app.get('/image.gif', (req, res) => {
    const info = {
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        time: new Date().toISOString(),
        ua: req.headers['user-agent']
    };

    console.log("Neuer Zugriff:", info);

    res.redirect(GIF_URL);
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
