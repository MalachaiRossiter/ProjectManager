const express = require('express');
const app = express();
require('./routes/product.routes')(app); //importing the exported routes so that we can use them in the server

app.listen(8000, () => console.log(`Listening on Port: 8000`));