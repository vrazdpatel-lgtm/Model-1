const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/user");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Register Route
app.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("Received Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.status(200).json({
      success: true,
      message: "Registration Successful",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});