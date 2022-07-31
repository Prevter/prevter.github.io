const path = require("path");
const express = require("express");
const app = express();
const api = require("./api");
const sqlite3 = require('sqlite3');

const port = process.env.PORT || 80;

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code === "SQLITE_CANTOPEN") {
        console.log("Could not open database");
        return;
    } else if (err) {
        console.log("Getting error " + err);
        return;
    }
    console.log("Database opened successfully");
});

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/api/:app/:apiMethod", async (req, res) => {
    if (api[req.params.app] && api[req.params.app][req.params.apiMethod]) {
        api[req.params.app][req.params.apiMethod](req, res, db, (response) => {
            res.status(response.status).json(response);
        });
    } else {
        res.status(404).send("API method not found");
    }
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});