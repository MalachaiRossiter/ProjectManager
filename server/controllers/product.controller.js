const Product = require("../models/product.model");

//index controller to test  working api requests to database
module.exports.index = (req, res) => {
    res.json({message: "Hello World"});
}

//creates new product in database
module.exports.createProduct = (req, res) => {
    Product.create(req.body) //Will be what the body sends to the create the product
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
    .then(products => {
        console.log(products);
        res.json(products);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}