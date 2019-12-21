// import modules
const express = require('express')
const bodyParser = require('body-parser')

// set up app and middleware
const App = express()
App.use(bodyParser.json()) // support json encoded bodies
App.use(bodyParser.urlencoded({
  extended: true
})) // support encoded bodies

// set port
App.set('port', process.env.PORT || 8000)

// start server
const WebServer = App.listen(App.get('port'), function () {
  let Host = WebServer.address().address
  let Port = WebServer.address().port
  console.log('Your express web server is listening at http://%s:%s.', Host, Port)
})

// start serving static files
App.use(express.static('public'))
App.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
