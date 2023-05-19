const externalApis = require('../services/externalApi.service')

const index = function(req, res){
    res.send({
        status : 200,
        message : 'Success',
        data : {}
    })
}

const searchWord = function(req, res){
    wordData = externalApis.dictSearchWord(req.params.word);

    res.send({
        status : 200,
        message : 'Success',
        data : wordData
    })
}

module.exports = {
    index,
    searchWord
};