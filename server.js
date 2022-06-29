const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/assets'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
