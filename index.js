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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Gebruik template engine Express voor DYNAMISCHE content
app.set("view engine", "ejs")
app.set("views", "./src/views")

// Routes
// Route. Luistert naar alle GET requests op /
app.get('/', (req, res) => {
  fs.readFile('data/statham.json', 'UTF-8', (err, data)  => {
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
    id: req.body.id = uuidv4(),
    Gender: req.body.gender,
    Size: req.body.shirtSize,
    Color: req.body.shirtColor,
    Text: req.body.textValue,
  };
  //shirtData.id =  uuidv4()
  userInput = JSON.stringify(shirtData)
 
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const existing_ID = existingShirtInJSON.id
  const newShirtje = req.body

  if(existing_ID !== req.body.id){
  existingShirtInJSON.shirtjes.push(newShirtje)
  const stringData = JSON.stringify(existingShirtInJSON, null, 2)
  fs.writeFileSync('data/statham.json', stringData)
}
  //console.log("shirtdata for cart",JSON.parse(shirtData))
  res.render("cart.ejs", {
  shirtData: shirtData, 
  userData: userInput
})
})

app.get('/bedankt', (req, res) => {
  res.render("bedankt.ejs"
  )
})

app.post('/bedankt', (req, res) => {
  const personalInformation = {
    Firstname: req.body.fname,
    Email: req.body.email,
    id: req.body.id,
    Gender: req.body.gender,
    Size: req.body.shirtSize,
    Color: req.body.shirtColor,
    Text: req.body.textValue,
  }
 
  res.render("bedankt.ejs", {
    personalInformation: personalInformation,
    //shirtData: shirtData
  }
  )
  console.log("bedankt page body", req.body)
})

app.get('/*', (req, res) => {
  res.render("error.ejs")
})


// start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

