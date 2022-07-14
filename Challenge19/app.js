const express = require('express')
const app = express()
const port =  3000
const path = require('path')
const fs = require('fs')

const bodyParser = require('body-parser')
const req = require('express/lib/request')
const res = require('express/lib/response')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('list', {list: data})
  })

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add',  (req, res) => {
  data.push({
    String: req.body.String, 
    Integer: req.body.Integer, 
    Float: req.body.Float, 
    Date: req.body.Date, 
    Boolean: req.body.Boolean
  })
  fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
  res.redirect('/')
})

app.get('/delete/:id',(req, res) => {
  const index = req.params.id
  data.splice(index, 1)
  fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
  res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
  res.render('edit', {item: data[req.params.id]})
})

app.post('/edit/:id', (req, res) => {
  data[req.params.id] = {
    String: req.body.String, 
    Integer: req.body.Integer, 
    Float: req.body.Float, 
    Date: req.body.Date, 
    Boolean: req.body.Boolean
  }
  fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf-8')
  res.redirect('/')
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
