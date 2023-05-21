const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const dictSearchWord = async function(word) {
    reqUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word

    const response = await fetch(reqUrl);
    const body = await response.json()

    return body
} 


const getTodaysQuotes = async function() {
    reqUrl = "https://zenquotes.io/api/today"

    const response = await fetch(reqUrl);
    const body = await response.json()

    return body
}

const getRandomQuotes = async function() {
    reqUrl = "https://zenquotes.io/api/random"

    const response = await fetch(reqUrl);
    const body = await response.json()

    return body
}

module.exports = {
    dictSearchWord,
    getTodaysQuotes,
    getRandomQuotes
}