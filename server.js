// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// ==============================================================

// Home Route
app.get("/", function(req, res){
    res.send("This is the resturant page");
    // res.sendFile(path.join(__dirname, "home.html"))
})

// Table Route
app.get("/tables", function(req, res){
    // res.send("This is the tables page");
    // res.sendFile(path.join(__dirname, "tables.html"))
})

// Reserve Route
app.get("/reserve", function(req, res){
    res.send("This is the reserve page");
    // res.sendFile(path.join(__dirname, "reserve.html"))
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });