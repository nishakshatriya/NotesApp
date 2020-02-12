const Note = require('../models/note.model.js');

exports.create = (req, res) => {

    if (!req.body.content){ 
        return res.status(400).send({
            message : "Note cannot be empty"
        });
}

const note = new Note({
    title: req.body.title || "untitled note",
    content : req.body.content
});

note.save().
then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({message : err.message || "some error happened"});
});

};