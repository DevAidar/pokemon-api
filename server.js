const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const pokemonRouter = require('./routes/pokemon');
const pokemonsRouter = require('./routes/pokemons');

const app = express();
const PORT = 5000;

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pokemons', pokemonsRouter);
app.use('/pokemon', pokemonRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

module.exports = app;