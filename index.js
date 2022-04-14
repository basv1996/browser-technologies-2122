//extern requires
const { v4: uuidv4 } = require('uuid')
const express = require("express")
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');
const { Console } = require('console');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Internals
const PORT = process.env.PORT || 1234

// Gebruik body-parser om te lezen wat er in POST requests van de form staat
app.use(express.static("static"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Gebruik template engine Express voor DYNAMISCHE content
app.set("view engine", "ejs")
app.set("views", "./src/views")

// Routes
// Route. Luistert naar alle GET requests op /
app.get('/', (req, res) => {
 if(req.query.edit) { //check if there is a query in the url with the name edit
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json')) //parse into json and read the file
  const shirtInData = existingShirtInJSON.shirtjes.find( //find in the shirtjes array in the json file an object that has the same id as in the query 
    ({ id }) => id == req.query.edit
  )
  res.render("index.ejs", {
    shirtInData, 
    id: req.query.edit
   }) 
  } else {
    res.render("index.ejs", {
      shirtInData: undefined, 
      id: uuidv4()
     }) 
   }
  })


app.get('/mydesigns', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))

  res.render("mydesign.ejs" , {
    bestaandeShirtjes: existingShirtInJSON.shirtjes 
  })
  
})

app.post('/mydesigns', (req, res) => {
  const shirtData = {
    id: req.body.id,
    gender: req.body.gender,
    shirtSize: req.body.shirtSize,
    shirtColor: req.body.shirtColor,
    textValue: req.body.textValue,
  };
  userInput = JSON.stringify(shirtData)
 
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const shirtInData = existingShirtInJSON.shirtjes.find( //find in the shirtjes array in the json file an object that has the same id as in the query 
  ({ id }) => id == req.body.id)

  if(shirtInData) { //if shirt exists then overwrite
    shirtInData.gender = req.body.gender
    shirtInData.shirtSize = req.body.shirtSize
    shirtInData.shirtColor = req.body.shirtColor
    shirtInData.textValue = req.body.textValue
  }
  else{ //if shirt does not exist push it into the array
    existingShirtInJSON.shirtjes.push(req.body)
  }

  error = "" // define the error message as an empty string

  const stringData = JSON.stringify(existingShirtInJSON, null, 2)
  fs.writeFileSync('data/statham.json', stringData)

  res.render("mydesign.ejs", { 
    errorMsg: error,
    shirtData: shirtData, 
    bestaandeShirtjes: existingShirtInJSON.shirtjes
  })
})

app.get('/cart', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const errortje = req.query.error
  error = "" // define the error message as an empty string
  if(errortje === "true") {
    error = "You haven't filled in an @ in your email adress"
  } 

  res.render("cart.ejs", {
    errorMsg: error,
    bestaandeShirtjes: existingShirtInJSON.shirtjes
  })
})

app.post('/cart', (req, res) => {
  const shirtData = {
    id: req.body.id,
    gender: req.body.gender,
    shirtSize: req.body.shirtSize,
    shirtColor: req.body.shirtColor,
    textValue: req.body.textValue,
  };
  userInput = JSON.stringify(shirtData) // converts an object or value to a JSON string
 
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json')) // parse a JSOn string
  const shirtInData = existingShirtInJSON.shirtjes.find( //find in the shirtjes array in the json file an object that has the same id as in the query 
  ({ id }) => id == req.body.id)

  if(shirtInData) { //if shirt exists then overwrite
    shirtInData.gender = req.body.gender
    shirtInData.shirtSize = req.body.shirtSize
    shirtInData.shirtColor = req.body.shirtColor
    shirtInData.textValue = req.body.textValue
  }
  else{ // if shirt does not exist then push into the array shirtjes
    existingShirtInJSON.shirtjes.push(req.body)
  }

  error = ""

  const stringData = JSON.stringify(existingShirtInJSON, null, 2)
  fs.writeFileSync('data/statham.json', stringData)
  res.render("cart.ejs", {
    errorMsg: error,
  shirtData: shirtData, 
  bestaandeShirtjes: existingShirtInJSON.shirtjes
})
})


// Post request that empties the data array in the json file, so the shopping cart will be empty
app.post('/deleteCart', (req, res) => {
    const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json')) // read the json file
    existingShirtInJSON.shirtjes.length = 0 // length of the data array becomes 0

    const stringData = JSON.stringify(existingShirtInJSON, null, 2) // turn the changed array to json object
    fs.writeFileSync('data/statham.json', stringData) // overwrite the old json file
    res.redirect('/') // redirect to the shopping cart page
})


app.get('/bedankt', (req, res) => {
  res.render("bedankt.ejs", { 
  })
})


var error  = "Your email doesn't have an @"

app.post('/bedankt', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const personalInformation = {
    Firstname: req.body.fname,
    Email: req.body.email,
  }

  if(!personalInformation.Email.includes("@")){
    error = "test"
    res.redirect('/cart?error=true')
    return false;
  }
 
  res.render("bedankt.ejs", {
    personalInformation: personalInformation,
    bestaandeShirtjes: existingShirtInJSON.shirtjes
  }
  )
})

app.get('/*', (req, res) => {
  res.render("error.ejs")
})

// start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});