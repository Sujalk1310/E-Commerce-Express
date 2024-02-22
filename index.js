const express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');
const seedDb = require('./seed');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const PORT = 8080;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials', (error) => { if(error) console.log(error.message)});

app.use(productRoutes);

// const password = encodeURIComponent("kinshu@123");
// const connectionString = `mongodb+srv://sujalk1310:${password}@ecommerce.gt3hv3f.mongodb.net/`;

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then((data, error) => {
    if (!error) {
        console.log("Connected to DB");
        // seedDb();
        app.listen(PORT, (error) => {
            if (!error) console.log("Server started at http://localhost:" + PORT);
            else console.log(error.message);
        }); 
    } else console.log(error);
});