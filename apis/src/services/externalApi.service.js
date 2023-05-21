const request = require("request");
// const fetch = require("node-fetch")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



const dictSearchWord = async function(word) {
    reqUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word

    const response = await fetch(reqUrl);
    const body = await response.json()

    return body
} 

module.exports = {
    dictSearchWord
}