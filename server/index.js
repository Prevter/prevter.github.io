const path = require("path");
const express = require("express");
const app = express();
const api = require("./api");
const { Pool } = require('pg');
var cors = require("cors");
const { editStatic } = require("./editStatic");
require('dotenv').config({ path: '../.env.local' });

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

const routes = {
    "/floattool": {
        "__TITLE__": "FloatTool",
        "__DESCRIPTION__": "Utility to create any float for your CS:GO skins.",
        "__THEME_COLOR__": "#f24941",
        "__PROJECT_DIR__": "/floattool",
        "__EMBED_IMAGE__": "/floattool/embed.png",
    },
    "/": {
        "__TITLE__": "Prevter's Stuff",
        "__DESCRIPTION__": "A place for all my projects",
        "__THEME_COLOR__": "#00bcd4",
        "__PROJECT_DIR__": "",
        "__EMBED_IMAGE__": "/embed.png",
    }
}

app.use(cors());
// custom middleware to edit static files before serving them
app.use(editStatic(path.join(__dirname, "..", "build"), routes)); 

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