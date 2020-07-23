// Creating, inserting data     - POST          - C
// Fetch, grabbing data         - GET           - R
// Updating existing data       - PUT           - U
// Removing, deleting data      - Delete        - D

const express = require('express');

const router = express.Router();

const {
	index,
	getDetailsByName,
	getImagesByName,
	getTypesByName,
	getMovesByName,
	getAbilitiesByName,
	getStatsByName,
	getWeightByName,
	getHeightByName,
	getBaseExperienceByName,
} = require('../controllers/pokemon-controller');

router.get('/', index);
router.get('/details', getDetailsByName);
router.get('/images', getImagesByName);
router.get('/types', getTypesByName);
router.get('/moves', getMovesByName);
router.get('/abilities', getAbilitiesByName);
router.get('/stats', getStatsByName);
router.get('/weight', getWeightByName);
router.get('/height', getHeightByName);
router.get('/base-experience', getBaseExperienceByName);

module.exports = router;