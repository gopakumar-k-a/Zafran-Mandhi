const express = require('express');
const app = express();
const path = require('path'); 
require('dotenv').config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index');  
});
app.get('/about', (req, res) => {
    res.render('about');  
});
app.get('/service', (req, res) => {
    res.render('index');  
});
app.get('/menu', (req, res) => {
    res.render('menu');  
});
app.get('/contact', (req, res) => {
    res.render('index');  
});



// Specify the port to listen on
const port = process.env.PORT || 4000; // Use environment variable or default 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
