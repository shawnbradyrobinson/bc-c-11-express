/**
 * const express = require(."express.js");
 * 
 * get route for * --> sends back index.html 
 * 
 * get route for /notes --> sends back notes.html 
 * 
 * 
 * get route for /api/notes --> read the db.json file and return all saved notes as JSON
 * 
 * 
 * 
 * get post for /api/notes --> receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. Each note needs a unique id when it's saved (https://www.npmjs.com/package/nanoid).
 * 
 * ^^^ should be OBJECT.id = nanoid();  
 * 
 * get delete for /api/notes --- OPTIONAL ---> receives a query paramater containing the id of a note to delete. Need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.m
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const express  = require("express");
const path = require("path");
//const notesData = require("./db/db.json");
//The PORT is going to have to be switched out with some .env thing --- need to look that up again. 
const PORT = 3001; 
const fs = require("fs");
const app = express();

app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})

