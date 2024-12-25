const express = require('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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
    let foundCollectible = coll[index]

    if(foundCollectible){
        res.send(foundCollectible)
    }
    else{
        res.send('This item is not yet in stock. Check back soon!')
    }

    console.log(foundCollectible)


})

app.get("/hello", (req,res) => {
    console.log(req.query)
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
})

app.get("/shoes",(req,res) => {
    console.log(req.query)
    let returnedShoes
    const foundShoes = shoes
    if(req.query.minprice){
        returnedShoes = foundShoes.filter((element) => {
            return element.price > req.query.minprice
        })
        res.send(returnedShoes)
    }
    else if(req.query.maxprice){
        returnedShoes = foundShoes.filter((element) => {
            return element.price < req.query.maxprice
        })
        res.send(returnedShoes)
    }
    else if(req.query.type){
        returnedShoes = foundShoes.filter((element) => {
            return element.type == req.query.type
        })
        res.send(returnedShoes)
    }
    
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
  });