// Load Node modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// Initialise Express
const app = express();
// Render static files
app.use(express.static('public'));

app.use("/css", express.static(__dirname + 'public/css'));
app.use("/js", express.static(__dirname + 'public/js'));
app.use("/img", express.static(__dirname + 'public/img'));


// Set the view engine to ejs
app.set(expressLayouts)
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080, () => {
    console.log('App listening on port 8080!');
});

// *** GET Routes - display pages ***
// Root Route
app.get('/', (req, res) => {
    res.render('pages/index');
    res.send(countdown);
});

