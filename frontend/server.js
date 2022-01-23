const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');

app.use(express.static('src'));

app.get("/", (req, res) => {
	sendFile();
});

app.listen(port);