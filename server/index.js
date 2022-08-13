const path = require("path");
const express = require("express");
const app = express();
const api = require("./api");
const { Pool } = require('pg');
var cors = require("cors");

const connectString = process.env.DATABASE_URL;
const port = process.env.PORT || 80;

const db = new Pool({
    connectionString: connectString,
    ssl: {
        rejectUnauthorized: false
    }
});

db.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

app.use(cors());
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