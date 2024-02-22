const { Router } = require('express');
const router = Router();
const { v4: uuidv4 } = require('uuid');
const Product = require('../models/products');

router.get('/', async (req, res) => {
    try {
        let products = await Product.find();
        res.render('index', {products});
    } catch (error) {
        console.log(error);
    }
});

router.get('/add/', (req, res) => {
    try {
        res.render('add');
    } catch (error) {
        console.log(error);
    }
});

router.post('/add/', async (req, res) => {
    try {
        let {name, imgUrl, price} = req.body;
        const newProduct = {productId: uuidv4(), name, imgUrl, price};
        await Product.create(newProduct);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.get('/delete/:productId', async (req, res) => {
    try {
        await Product.deleteOne({ productId: req.params.productId });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.get('/edit/:productId', async (req, res) => {
    try {
        let product = await Product.findOne({ productId: req.params.productId });
        res.render("edit", {product});  
    } catch (error) {
        console.log(error);
    }
});

router.post('/edit/', async (req, res) => {
    try {
        const {productId, name, imgUrl, price} = req.body;
        await Product.updateOne({productId}, { productId, name, imgUrl, price });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;