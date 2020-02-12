const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const dbconfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("successfully connected to database");

}).catch(err => {
    console.log('could not connect..exiting now',err);
    process.exit();
});

app.get('/',(req,res) => {
    let message = "welcome to EasyNotes application.Take notes quickly."
    res.json({"message":message});
});

require('./app/routes/routes.js')(app);

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});