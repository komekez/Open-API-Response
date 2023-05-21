const externalApis = require('../services/externalApi.service')

const index = function(req, res){
    res.send({
        status : 200,
        message : 'Success',
        data : {}
    })
}

const searchWord = function(req, res){
    result = {}
    message = 'Fail'
    // console.log('here')
    // console.log(req.params)
    wordData = externalApis.dictSearchWord(req.params.word);
    // console.log("REq", req.params.word)
    console.log("Word Data : ", wordData)
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