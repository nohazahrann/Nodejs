express = require('express')
app = express()
metrics = require('./metrics.js');

app.set('port', 1337)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get(
  '/hello/:name', 
  (req, res) => res.render('Hello.ejs', {name: req.params.name})
)
app.get(
  '/hello/:name', 
  (req, res) => res.send("Hello " + req.params.name)
)
app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})


