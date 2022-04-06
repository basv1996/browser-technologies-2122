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
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  res.render("cart.ejs", {
    bestaandeShirtjes: existingShirtInJSON.shirtjes
  
  //res.send("cart page")
})
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
  bestaandeShirtjes: existingShirtInJSON.shirtjes
})
})

//Deleting a single item
app.post('/delete/:id', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const existing_ID = existingShirtInJSON.shirtjes.id
  url_ID = req.params.id;
  console.log("show json data: ", existingShirtInJSON)
  console.log("url id geg: ",url_ID)
  console.log(existingShirtInJSON.shirtjes)
 
})




// //deleting a single user
// router.post("/delete", function (req, res) {
//   const DBUserID = ObjectID(req.body.ID);
//   db.initialize(dbName, collectionName, function (dbCollection) {
//     dbCollection.deleteOne({ _id: DBUserID }, function (error) {
//       if (error) throw error;
//       res.render("pages/delete-succes", {
//         title: "Delete was succesfull",
//       });
//     });
//   });
// });

app.get('/bedankt', (req, res) => {
 
  res.render("bedankt.ejs", {
   
  })
})

app.post('/bedankt', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const personalInformation = {
    Firstname: req.body.fname,
    Email: req.body.email,
  }
 
  res.render("bedankt.ejs", {
    personalInformation: personalInformation,
    bestaandeShirtjes: existingShirtInJSON.shirtjes
  }
  )
  console.log("bedankt page body", req.body)
  console.log("bestaande shirtjess: ", existingShirtInJSON.shirtjes)
})

app.get('/*', (req, res) => {
  res.render("error.ejs")
})


// start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

