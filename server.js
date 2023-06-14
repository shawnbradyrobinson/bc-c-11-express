
const express  = require("express");
const path = require("path");
const notesData = require("./db/db.json");
const uuid = require("./helpers/uuid");
//The PORT is going to have to be switched out with some .env thing --- need to look that up again. 
const PORT = 3001; 
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get("/api/notes", (req, res) => {
    
    const testObject =  {
        
        title: "testingtoday",
        text: "testing", 
        id: uuid(),
    }

   const data = fs.readFileSync("./db/db.json", "utf8");
   
    res.json(JSON.parse(data));
})

app.post("/api/notes", (req, res) =>{
    const {title, text} = req.body; 
    
    if(title && text){
        
        const newNoteToPost = {
            title,
            text, 
            id: uuid()
        };
        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if (err){
                console.error(err);
            }else{
                const parsedNotes = JSON.parse(data);

                parsedNotes.push(newNoteToPost);
                const stringNotes = JSON.stringify(parsedNotes);

                fs.writeFile("./db/db.json", stringNotes, (err) => err ? console.log(err) : console.log("success!"));
            }
        });
        res.json(newNoteToPost);
    }else{
        console.log("data isn't coming through yet");
    }
    
})


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})

