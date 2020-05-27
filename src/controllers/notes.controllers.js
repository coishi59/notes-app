const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body
    const newNote = new Note({title, description});
    await newNote.save();
    req.flash('success_msg', 'Note added successfully');
    res.redirect('/notes');  
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', {notes});
};

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', {note});
};

notesCtrl.updateNotes = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Note updated successfully');
    res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    req.flash('success_msg', 'Note deleted successfully');
    res.redirect('/notes'); 
};


//esta instruccion se pone para poder usar los metodos en la pagina de notes.routes
module.exports = notesCtrl;