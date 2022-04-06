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


//   fs.readFile('data/statham.json', 'UTF-8', (err, data)  => {
//     if (err) throw err
//     console.log('data is: ', data)
//     let info = JSON.parse(data)
//   res.render("index.ejs", {
//   eerder_opgeslagen_data: info })
//   //res.send("hello world")
// })
// })

app.get('/mydesigns', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))

  res.render("mydesign.ejs" , {
    //shirtData: shirtData,
    bestaandeShirtjes: existingShirtInJSON.shirtjes 
  })
  
})

app.post('/mydesigns', (req, res) => {
  res.render("mydesign.ejs", { 
  shirtData: shirtData ,

})
})


app.get('/cart', (req, res) => {
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const errortje = req.query.error
  // console.log(errortje)
  // console.log(typeof errortje)
  error = ""
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
    id: req.body.id = uuidv4(),
    Gender: req.body.gender,
    Size: req.body.shirtSize,
    Color: req.body.shirtColor,
    Text: req.body.textValue,
  };
  userInput = JSON.stringify(shirtData)
 
  const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  const shirtInData = existingShirtInJSON.shirtjes.find( //find in the shirtjes array in the json file an object that has the same id as in the query 
  ({ id }) => id == req.body.id)

  if(shirtInData) { //if shirt exists then overwrite
    shirtInData.Gender = req.body.gender
    shirtInData.Size = req.body.shirtSize
    shirtInData.Color = req.body.shirtColor
    shirtInData.Text = req.body.textValue
  }
  else{
    existingShirtInJSON.shirtjes.push(req.body)
  }



  // const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
  
  // const existing_ID = existingShirtInJSON.id
  // const newShirtje = req.body

  error = ""

   
  // if(existing_ID !== req.body.id){
  // existingShirtInJSON.shirtjes.push(newShirtje)
  const stringData = JSON.stringify(existingShirtInJSON, null, 2)
  fs.writeFileSync('data/statham.json', stringData)
//}



  res.render("cart.ejs", {
    errorMsg: error,
  shirtData: shirtData, 
  bestaandeShirtjes: existingShirtInJSON.shirtjes
})
})

//Deleting a single item
// app.post('/delete/:id', (req, res) => {
//   const existingShirtInJSON = JSON.parse(fs.readFileSync('data/statham.json'))
//   const existing_ID = existingShirtInJSON.shirtjes.find(({id}))
//   url_ID = req.params.id;
//   console.log("show json data: ", existingShirtInJSON)
//   console.log("url id is:  ",url_ID)
//   console.log(existing_ID)
 
// })


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
    // res.redirect('/cart', {
    //   errorMsg: error
    // })
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

