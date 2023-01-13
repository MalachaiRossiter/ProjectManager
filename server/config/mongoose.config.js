const mongoose = require('mongoose')

//this will create a database called product if one doesnt already exist without using the shell
mongoose.connect("mongodb://127.0.0.1:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong while connecting to the database", err)); 