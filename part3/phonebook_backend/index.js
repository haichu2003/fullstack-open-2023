const express = require("express")
const app = express()

let phonebooks = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/persons", (req, res) => {
    res.json(phonebooks);
});

app.get("/api/persons/:id", (req, res) => {
    id = parseInt(req.params.id) - 1;
    if (id > phonebooks.length) res.status(404).send("person not found");
    res.json(phonebooks[id]);
});

app.get("/info", (req, res) => {
    current = new Date().toString()
    message = `
    <p>Phonebook has info for ${phonebooks.length} people</p>
    <p>${current}</p>`
    res.send(message)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
