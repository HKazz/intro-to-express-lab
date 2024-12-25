const express = require('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/greetings/:username', (req, res) => {
    let userName = req.params.username
    res.send(`Hello there, ${userName}!`)
})

app.get("/roll/:num", (req,res) => {
    if(Number(req.params.num) >= 0){
        res.send(`You rolled a ${req.params.num}`)
    }
    else{
        res.send('You must specify a number.')
    }
})

app.get("/collectibles/:index", (req,res) => {
    const coll = collectibles
    let index = req.params.index
    let foundCollectible = coll.find(index)

    console.log(foundCollectible)

    res.send(foundCollectible)

})

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });