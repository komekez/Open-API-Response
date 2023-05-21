const request = require("request");


const dictSearchWord = function(word) {
    // console.log(word)
    reqUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word

    console.log("URL", reqUrl)

    return request(reqUrl, function(error, response, body) {
        // console.log(response)
        if (!error && response.statusCode == 200) {
            console.log("Reached here")
            console.log("Body", body)
            return body
        }
    }).pipe(response);
} 

module.exports = {
    dictSearchWord
}