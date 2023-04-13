const ClientController = require('../Controllers/ClientController');
const express = require('express');
const router = express.Router();

router.post('/addclient', ClientController.addClient);
router.put('/updateclient', ClientController.updateClient);

module.exports = router;