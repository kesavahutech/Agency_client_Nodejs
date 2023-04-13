const AgencyController = require('../Controllers/AgencyController');
const express = require('express');
const router = express.Router();

router.post('/createagency', AgencyController.createAgency);
router.put('/updateagency', AgencyController.updateAgency);
router.get('/getagency', AgencyController.getAgency);

module.exports = router;