const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();

const DB_NAME = "carRental";
const COLLECTION_NAME = "cars";

router.get("/rental-cars", async (req, res) => {
    const { year, color, steering_type, number_of_seats } = req.query;

    try {

        const client = new MongoClient("mongodb://localhost:27017");

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        const filter = {};
        if (year) filter.year = parseInt(year);
        if (color) filter.color = color;
        if (steering_type) filter.steering_type = steering_type;
        if (number_of_seats) filter.number_of_seats = parseInt(number_of_seats);

        const cars = await collection.find(filter).sort({ price_per_day: 1 }).toArray();

        await client.close();
        res.json(cars);
    } catch (err) {
        res.status(500).json({error: "Error fetching cars"});
    }
});

module.exports = router;