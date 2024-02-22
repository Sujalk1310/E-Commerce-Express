const Product = require('./models/products');
const { v4: uuidv4 } = require('uuid');

let products = [
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 15",
        price: "120"
    }, 
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "100"
    },
    {
        productId: uuidv4(),
        imgUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202402191144",
        name: "Iphone 13",
        price: "100"
    }
];

const seedDb = async () => {
    try {
        await Product.insertMany(products);
        console.log("Data seeded");
    } catch (error) {
        console.log(error);
    }
}

module.exports = seedDb;