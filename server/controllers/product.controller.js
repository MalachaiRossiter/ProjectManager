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

//gets all of the products in the database
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

//gets a singular product from the database
module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

//gets a singular product from the database
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

//deletes a product based on an id from the database
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => console.log(err))
}

