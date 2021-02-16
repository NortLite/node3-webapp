const express = require('express');
const path = require('path');
const hbs =  require('hbs');

const app = express();
const port = process.env.PORT || 3000  // for finding heroku port

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views/views'));
hbs.registerPartials(path.join(__dirname, '../views/partials'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'NorthLight'
     });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About',
        name: 'NorthLight'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Helping hand',
        message: 'HELP ME, HELP ME PLS',
        name: 'NorthLight'
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must to provide a search term'
        });
    };
    
    res.send({
        products: []
    });
});

app.get('/weather' , (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'No address'
        });
    };

    res.send({
        weather: 'Snowing stronk',
        location: 'riga',
        address: req.query.address
    });
});

app.get('*', (req, res) => {
    res.send('My 404 page');
});

app.listen(port, () => {
    console.log('Server is up on port:' + port);
});