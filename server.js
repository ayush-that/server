// Initialize dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import the required modules
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const notesController = require("./controllers/notesController");

// Create an instance of the express server
const app = express();

// Configure the server
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchSingleNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// Start the server
app.listen(3000);
