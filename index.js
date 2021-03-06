const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');
const port = 3000



app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('anuncio.png', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

//curl -F "sampleFile=@p2.png" http://localhost:3000/upload


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
