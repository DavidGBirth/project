const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');
const path = require('path');

app.use(express.static('src'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
	return false;
});

app.post("", (req, res) => {
	
});

app.listen(port);