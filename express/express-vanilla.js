const express = require('express')
const app = express()
const util = require('util')

app.get('/hello', function (req, res) {
  var name = req.params.name || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
})

app.listen(10010, function () {
      console.log('Example app listening on port 10010')
})
