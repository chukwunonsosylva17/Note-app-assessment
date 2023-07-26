const textbookModel = require('../schemas/book.schema');
//  create a note app
const createNote = async (_name, author, _page) => {
    
    const newNoteInstance = new noteModel({name: _name, author: _author, page: _page});
    const savedNote = newNoteInstance.save();
    return savedNote;
 }

// read all note app

const getAllNote = async () => {
    const t = noteModel.find({author: _author})
    return 
}

// read an  individual note app

const oneNote = async () => {
    noteModel.findOne({_id: id})
}

// update an individual note app
const updateNote = () => {
    noteModel.findOneAndUpdate({_id: id}, {name: _name})
}

// delete a note app
const deletedNote = () => {
    noteModel.findOneAndDelete({_id: id})
}

module.exports = {createNote, getAllNote, oneNote, updateNote, deletedNote }