const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("hello");
});

// Define an API endpoint to handle button click
app.get("/api/welcome", (req, res) => {
    res.json({ message: "Welcome to my webpage" });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
