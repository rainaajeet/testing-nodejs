var express = require('express')
var demo = express()

demo.set('port', (process.env.PORT || 4000))
demo.use(express.static(__dirname + '/public'))

demo.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(demo.get('port'), function() {
  console.log("Node app is running at localhost:" + demo.get('port'))
})
