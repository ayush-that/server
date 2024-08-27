const Note = require("../models/note");

// Define the function to fetch all the notes
const fetchNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

// Define the function to fetch a single note
const fetchSingleNote = async (req, res) => {
  // Extract the id from the request parameters
  const id = req.params.id;
  const note = await Note.findById(id);
  res.json({ note });
};

// Define the route to create a new note
const createNote = async (req, res) => {
  const { title, body } = req.body;

  // Create a new note
  const note = await Note.create({
    title,
    body,
  });

  // Send the note as a response
  res.json({ note: note });
};

// Define the route to update a note
const updateNote = async (req, res) => {
  // Extract the id from the request parameters
  const noteId = req.params.id;
  const { title, body } = req.body;

  // Find the note with the given id and update it
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });

  // Find the updated note
  const note = await Note.findById(noteId);
  res.json({ note });
};

// Define the route to delete a note
const deleteNote = async (req, res) => {
  // Extract the id from the request parameters
  const noteId = req.params.id;

  // Find the note with the given id and delete it
  await Note.deleteOne({ _id: noteId });
  res.json({ message: "Note deleted successfully" });
};

// Export the functions
module.exports = {
  fetchNotes,
  fetchSingleNote,
  createNote,
  updateNote,
  deleteNote,
};
