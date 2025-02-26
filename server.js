require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/carRental";

mongoose.connect(MONGO_URI, {
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use("/auth", require("./routes/auth"));
app.use("/cars", require("./routes/cars"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));