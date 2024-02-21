const express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');
const { v4: uuidv4 } = require('uuid');
const PORT = 8080;

let products = [
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 15",
        price: "$120"
    }, 
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "$100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "$100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "$100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "$100"
    }
];

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials', (error) => { if(error) console.log(error.message)});

app.get('/', (req, res) => {
    try {
        res.render('index', {products});
    } catch (error) {
        console.log(error);
    }
});

app.get('/add/', (req, res) => {
    try {
        res.render('add');
    } catch (error) {
        console.log(error);
    }
});

app.post('/add/', (req, res) => {
    try {
        let {name, imgUrl, price} = req.body;
        price = `$${price}`;
        const newProduct = {productId: uuidv4(), name, imgUrl, price}
        products.push(newProduct);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

app.get('/delete/:productId', (req, res) => {
    try {
        products = products.filter((product) => product.productId != req.params.productId);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

app.get('/edit/:productId',  (req, res) => {
    try {
        const product = products.filter((product) => product.productId == req.params.productId)[0];
        res.render("edit", {product});  
    } catch (error) {
        console.log(error);
    }
});

app.post('/edit/', (req, res) => {
    try {
        const {productId, name, imgUrl, price} = req.body;
        products.forEach((product, key) => {
            if (product.productId == productId) {
                product.name = name;
                product.imgUrl = imgUrl;
                product.price = price;
            }
        });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, (error) => {
    if (!error) console.log("Server started at http://localhost:" + PORT);
    else console.log(error.message);
}); 