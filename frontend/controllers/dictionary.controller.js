const config = require('../config')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const baseUrl = config.SITE+":"+config.API.PORT

const dictEnd = '/dictionary'

exports.wordSearch = async function (req, res) {
    const word = req.query.word
    const word_response = await fetch(baseUrl+dictEnd+"/"+word);
    const word_data = await word_response.json();

    result = {}
    if(word_data.status == 200 && word_data && word_data.data && word_data.data.meanings){
        meanings = word_data.data.meanings

        for (let i = 0; i < meanings.length; i++) {
            if(meanings[i].hasOwnProperty('partOfSpeech')){
                current_definitions = meanings[i].definitions

                meanings_arr = []
                if(current_definitions.length > 1){
                    for (let j = 0; j < current_definitions.length; j++) {
                        meanings_arr.push(current_definitions[j])
                    } 
                } else{
                    meanings_arr = meanings[i].definitions
                }
                result[meanings[i].partOfSpeech] = meanings_arr
            }
        }
    }

    res.send({
        status : 'success',
        response : result
    })
};
