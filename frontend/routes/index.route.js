const express = require('express');
const router = express.Router();

const quotes_controller = require('../controllers/quotes.controller')
const dict_controller = require('../controllers/dictionary.controller');

router.get('/', quotes_controller.run);
router.get('/dictionary/search-word', dict_controller.wordSearch);

module.exports = router;
