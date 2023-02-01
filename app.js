const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

//Mongoose
mongoose.connect("mongodb+srv://First:spSLlYiDJiWQTs4D@cluster0.mrwn2wv.mongodb.net/?retryWrites=true&w=majority")


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/SignUp', (req, res) => {
    res.render('SignUp')
  })

app.get('/home', (req, res) => {
    res.render('home')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})