
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const db = require('./queries')
const {body} = require('express-validator')

// middleware 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// routes for the api 
app.get('/', (req, res) => {
    res.send(`Hey it's working !!`);
});

// api routes 


app.listen(port,() => {
    console.log(`Server started at ${port}`)
});

app.get("/api/gharana",db.getHouse);
app.get("/api/character",db.getCharacter);
app.get("/api/onedialog",db.getOneDialog);
app.get("/api/fivedialog",db.getFiveDialog);
app.get("/api/characterdialog",[body('character').trim().escape()],db.getCharacterDialog);
