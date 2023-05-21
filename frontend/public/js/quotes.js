const config = require('../../config')

const quoteUrl = config.SITE+config.API.PORT

const quoteEnd = '/quotes'

console.log('here')
async function todaysQuote() {
   
    // Storing response
    const response = await fetch(quoteUrl+quoteEnd+'/todays');
    const data = await response.json();
    console.log(data);
    if (data.status == 200) {
        return data
    }
    return {}
}

// const todaysQuote = async() => {
//     const response = await fetch(quoteUrl+quoteEnd+'/todays')
//                             .then(data => {
//                                 if(data.status == 200) {
//                                     return data.json
//                                 }
//                                 throw new Error(`HTTP error: ${data.status}`);
//                             }).catch(e => {
//                                 console.log('Something went wrong in todays quotes')
//                             })
//     // const jsonRes = await response.json(); //extract JSON from the http response

//     // return jsonRes
// }


await todaysQuote()