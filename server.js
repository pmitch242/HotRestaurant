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
    },
    {
        id: 10002,
        name: "You",
        email: "me@yahoo.com",
        phone: "222-222-2222"
    },   {
        id: 10003,
        name: "Them",
        email: "me@yahoo.com",
        phone: "222-222-2222"
    }

];

// Routes
// ==============================================================

// Home Route
app.get("/", function (req, res) {
    // res.send("This is the resturant page");
    res.sendFile(path.join(__dirname, "home.html"))
})

// Table Route
app.get("/tables", function (req, res) {
    // res.send("This is the tables page");
    res.sendFile(path.join(__dirname, "tables.html"))
})

// Reserve Route
app.get("/reserve", function (req, res) {
    // res.send("This is the reserve page");
    res.sendFile(path.join(__dirname, "reserve.html"))
})

// Display tables
app.get("/api/tables", function (req, res) {
   let tables =  reservations.slice(0,2)
    res.json(tables);

});

// Display waitlist
app.get("/api/waitlist", function (req, res) {
   let waitlist = reservations.slice(2)
    res.json(waitlist);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(newReservation);

    // We then add the json the user sent to the character array
    reservations.push(newReservation);

    // We then display the JSON to the users
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});