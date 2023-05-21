const express = require('express');
const router = express.Router()

dictionaryController = require('../controller/dictionary.controller')

router.route('/dictionary/').get(dictionaryController.index)
router.route('/dictionary/:word').get(dictionaryController.searchWord)


module.exports = router