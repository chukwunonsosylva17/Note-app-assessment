const Contact = require("../models/textbook");

class NoteService {
  async create(createNoteDto) {
    const newNote = await Note.create(createContactDto);
    return newNote;
  }
}

module.exports = new NoteService();