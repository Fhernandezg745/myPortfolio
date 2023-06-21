const express = require('express');
const app = express();
const PORT = 4000;



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});