const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const apiRouter = require('./routes/api/v1/index');


// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', apiRouter);

// app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

