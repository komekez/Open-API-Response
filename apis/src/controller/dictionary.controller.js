const externalApis = require('../services/externalApi.service')

const index = function(req, res){
    res.send({
        status : 200,
        message : 'Success',
        data : {}
    })
}

const searchWord = async function(req, res){
    result = {}
    message = 'Fail'
    wordData = await externalApis.dictSearchWord(req.params.word);

    if(wordData && wordData.length > 0){
        result = {
            'word' : wordData[0].word,
            'phonetic' : wordData[0].phonetic,
            'meanings' : wordData[0].meanings
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
    index,
    searchWord
};