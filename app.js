const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // ejs is set as the view engine
app.set('views', './views'); // views directory is set

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', (req, res) => {
  // login logic here
  res.send('Login successful!');
});

app.post('/signup', (req, res) => {
  // signup logic here
  res.send('Signup successful!');
});

app.listen(port, () => {
  console.log('Server is initializing...');
  console.log(`App listening at http://localhost:${port}`);
});