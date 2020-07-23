const pokemonData = require('../data/data');

// Show all pokemon
const index = (_, res) => {
	if (pokemonData) res.status(200).json({ pokemons: pokemonData });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getDetails = (_, res) => {
	if (pokemonData) res.status(200).json({ details: pokemonData });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getImages = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, images: pokemon.sprites })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getTypes = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, types: pokemon.types })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getMoves = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, moves: pokemon.moves })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getAbilities = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, abilities: pokemon.abilities })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getStats = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, stats: pokemon.stats })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getWeight = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, weight: pokemon.weight })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getHeight = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, height: pokemon.height })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getBaseExperience = (_, res) => {
	if (pokemonData) res.status(200).json({ data: [
		pokemonData.map(pokemon => ({ name: pokemon.name, id: pokemon.id, base_experience: pokemon.base_experience })),
	] });
	else res.status(500).json({ message: 'There were no pokemons found' });
};

const getDetailsByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json(pokemonData.find(pokemon => pokemon.name === req.body.name));
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getImagesByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					images: pokemonData.find(pokemon => pokemon.name === req.body.name).sprites,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getTypesByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					types: pokemonData.find(pokemon => pokemon.name === req.body.name).types,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getMovesByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					moves: pokemonData.find(pokemon => pokemon.name === req.body.name).moves,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getAbilitiesByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					abilities: pokemonData.find(pokemon => pokemon.name === req.body.name).abilities,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getStatsByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					stats: pokemonData.find(pokemon => pokemon.name === req.body.name).stats,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getWeightByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					weight: pokemonData.find(pokemon => pokemon.name === req.body.name).weight,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getHeightByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					height: pokemonData.find(pokemon => pokemon.name === req.body.name).height,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

const getBaseExperienceByName = (req, res) => {
	if (pokemonData) {
		if (req.body.name) {
			if (pokemonData.some(pokemon => pokemon.name === req.body.name)) {
				res.status(200).json({
					name: req.body.name,
					base_experience: pokemonData.find(pokemon => pokemon.name === req.body.name).base_experience,
				});
			} else {
				res.status(500).json({ message: `${req.body.name} was not found` });
			}
		} else {
			res.status(404).json({ message: 'No name was received' });
		}
	} else res.status(500).json({ message: 'There were no pokemons found' });
};

module.exports = {
	index,
	getDetails,
	getImages,
	getTypes,
	getMoves,
	getAbilities,
	getStats,
	getWeight,
	getHeight,
	getBaseExperience,
	getDetailsByName,
	getImagesByName,
	getTypesByName,
	getMovesByName,
	getAbilitiesByName,
	getStatsByName,
	getWeightByName,
	getHeightByName,
	getBaseExperienceByName,
};

