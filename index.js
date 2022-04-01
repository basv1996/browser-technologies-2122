//extern requires
const { v4: uuidv4 } = require('uuid')
const express = require("express")
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Internals
const PORT = process.env.PORT || 1234

// Gebruik body-parser om te lezen wat er in POST requests van de form staat
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Gebruik template engine Express voor DYNAMISCHE content
app.set("view engine", "ejs")
app.set("views", "./src/views")

// Routes
// Route. Luistert naar alle GET requests op /
app.get('/', (req, res) => {
  fs.readFile('data/userData.json', 'UTF-8', function (err, data) {
    if (err) throw err
    console.log('data is: ', data)
    let info = JSON.parse(data)
  res.render("index.ejs", {
  eerder_opgeslagen_data: info })
  //res.send("hello world")
})
})

app.get('/mydesigns', (req, res) => {
  //const rawData = fs.readFileSync('static/data/userData.json');
  //const cleanData = JSON.parse(rawData)
  //console.log("cleanData is: ",cleanData)

  res.render("mydesign.ejs" , {
    shirtData: shirtData 
  })
  
})

app.post('/mydesigns', (req, res) => {
  const shirtData = {
    id: req.body.id,
    Gender: req.body.gender,
    Size: req.body.shirtSize,
    Color: req.body.shirtColor,
    Text: req.body.textValue,
  };
  shirtData.id =  uuidv4()
  console.log("design data: ", shirtData)
  res.render("mydesign.ejs", {
   
  shirtData: shirtData 
})
})


app.get('/cart', (req, res) => {
  res.render("cart.ejs")
  //res.send("cart page")
})

app.post('/cart', (req, res) => {
  const shirtData = {
    Gender: req.body.gender,
    Size: req.body.shirtSize,
    Color: req.body.shirtColor,
    Text: req.body.textValue,
  };
  userInput = JSON.stringify(shirtData)
  fs.writeFile('data/userData.json', userInput, 'utf8', cb => {
    console.log("werk dan, schrijf naar JSON")
  })
  //console.log("shirtdata for cart",JSON.parse(shirtData))
  res.render("cart.ejs", {
  shirtData: shirtData, 
  userData: userInput
})
})

app.get('/*', (req, res) => {
  res.render("error.ejs")
})


// start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

