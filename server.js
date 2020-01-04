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

// Arrays
// =============================================================
let reservations = [
    {
        id: 10001,
        name: "Me",
        email: "me@yahoo.com",
        phone: "222-222-2222"
    }
];

// Routes
// ==============================================================

// Home Route
app.get("/", function(req, res){
    // res.send("This is the resturant page");
    res.sendFile(path.join(__dirname, "home.html"))
})

// Table Route
app.get("/tables", function(req, res){
    // res.send("This is the tables page");
    res.sendFile(path.join(__dirname, "tables.html"))
})

// Reserve Route
app.get("/reserve", function(req, res){
    // res.send("This is the reserve page");
    res.sendFile(path.join(__dirname, "reserve.html"))
})

// Display all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });