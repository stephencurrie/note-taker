const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//API ROUTES

app.use('/api', apiRoutes);

//HTML ROUTES
app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

