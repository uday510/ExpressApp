const express = require('express')
const app = express()
const port = 3000
const apiRouter = require('./routes/api/v1/index');

app.use('/api/v1', apiRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

