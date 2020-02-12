module.exports = (app) => {
     const notes = require('../controllers/note.controllers');

    //create note
    app.post('/notes', notes.create);
    
}