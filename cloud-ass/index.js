
const express = require('express')
const dataManips = require("./data.js")
const cors = require('cors');




const app = express()



app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json())

function addPerson(newPerson) {
    newPerson.id =dataManips.getData().length+1
    dataManips.addData(newPerson)
}

app.get("/GET/persons", (req, res)=>{
    console.log("get sent")
	res.status(200).json(dataManips.getData())
})

app.get("/GET/persons/:id", (req, res)=>{
    const persons = dataManips.getData()
    const size = persons.length
    let found = false
    let target = null
	for (let i = 0 ; i < size; i++){
        if(persons[i].id == req.params.id) {
            found = true
            target =persons[i]
            break
        }
	}
    if(found) {
        res.status(200).json(target)
    } else {
        res.status(404).send("couldn't find such person")
    }
})


app.post("/POST/persons", (req, res)=>{
    console.log(req.body)
    addPerson(req.body)
    res.status(200).send("new person added")
})


app.put("/PUT/persons/:id", (req, res)=>{
    const person = req.body
    dataManips.setData(person, req.params.id)
    res.status(200).send("person recieved")
})


app.delete("/DELETE/persons/:id", (req, res)=>{

    const id = req.params.id
    dataManips.delData(id)
    res.status(200).send("request recieved")
})
const port = 3000 
app.listen(port, ()=>{console.log(`app is listening ${port}`)})
