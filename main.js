// Import Express
const express = require("express");
// Import mongoose
const mongoose = require("mongoose");

// Import dog models
const { Dog } = require("./models");

// Using Express
const app = express();
app.use(express.json());

// GET ALL
app.get("/dogs", async (req, res) => {
    const allDogs = await Dog.find();
    return res.status(200).json(allDogs);
});

// GET BY ID
app.get("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    return res.status(200).json(dog);
});

// POST
app.post("/dogs", async (req, res) => {
    const newDog = new Dog({ ...req.body });
    const insertedDog = await newDog.save();
    return res.status(201).json(insertedDog);
});

// PUT
app.put("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    await Dog.updateOne({ id }, req.body);
    const updatedDog = await Dog.findById(id);
    return res.status(200).json(updatedDog);
});

// DELETE
app.delete("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    const deletedDog = await Dog.findByIdAndDelete(id);
    return res.status(200).json(deletedDog);
});

// Connection to Database with mongoose
const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://mongouser:<password>@cluster0.lz21f1y.mongodb.net/?retryWrites=true&w=majority");
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();