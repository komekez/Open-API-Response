const externalApis = require('../services/externalApi.service')


const getTodaysQuotes = async function(req, res){
    result = {}
    message = 'Fail'
    const getTodaysQuotes = await externalApis.getTodaysQuotes();

    if(getTodaysQuotes && getTodaysQuotes.length > 0) {
        result = {
            'quote' : getTodaysQuotes[0].q,
            'author' : getTodaysQuotes[0].a,
            'html' : getTodaysQuotes[0].h
        }
        message = 'Success'
    }

    res.send({
        status : 200,
        message : message,
        data : result
    })
}


const getRandomQuotes = async function(req, res){
    result = {}
    message = 'Fail'
    const getRandomQuotes = await externalApis.getRandomQuotes();

    if(getRandomQuotes && getRandomQuotes.length > 0) {
        result = {
            'quote' : getRandomQuotes[0].q,
            'author' : getRandomQuotes[0].a,
            'html' : getRandomQuotes[0].h
        }
        message = 'Success'
    }
    res.send({
        status : 200,
        message : message,
        data : result
    })
}


module.exports = {
    getTodaysQuotes,
    getRandomQuotes
};