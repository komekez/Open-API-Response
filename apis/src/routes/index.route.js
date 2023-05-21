const express = require('express');
const router = express.Router()

dictionaryController = require('../controller/dictionary.controller')
quotesController = require('../controller/quotes.controller')

//Dictionary APIS
router.route('/dictionary/').get(dictionaryController.index)
router.route('/dictionary/:word').get(dictionaryController.searchWord)

//Quotes APIS
router.route('/quotes/todays').get(quotesController.getTodaysQuotes)
router.route('/quotes/random').get(quotesController.getRandomQuotes)


module.exports = router