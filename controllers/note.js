const Note = require("../models/textbook");
const noteService = require("../services/note.service");
const { CreateBookSchema} = require("../schemas/book.schema");

class NoteController {
  async getNotes(req, res) {
    console.log("The request body is");
    const notes = await Note.find({ user_id: req.user.id });
    res.status(200).json(notes);
  };

  async createNote(req, res) {
    //console.log("The request body is:", req.body);
   
      const value = await CreateBookSchema.validateAsync(req.body);

    const note = await noteService.create(value);
    res.status(201).json(note);
  };

  async getNote(req, res) {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }
    res.status(201).json(note);
  };

  async updateNote(req, res) {

    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updateNote) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).send({
      success: true, 
      data: updateNote
    });
  };

  async deleteNote(req, res) {
    res.status(201).json({ message: `Delete note for ${req.params.id}` });
  };
}

module.exports = new NoteController();