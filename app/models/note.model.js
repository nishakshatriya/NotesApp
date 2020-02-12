const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title : String,
    content : String
},{
    timestamps : true //add to fields createdAt and updatedAt
});

module.exports = mongoose.model('Note',NoteSchema);