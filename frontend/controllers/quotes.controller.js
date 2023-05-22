const config = require('../config')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const baseUrl = config.SITE+":"+config.API.PORT

const quoteEnd = '/quotes'

exports.run = async function (req, res) {
    const random_response = await fetch(baseUrl+quoteEnd+"/random");
    const random_data = await random_response.json();

    const todays_response = await fetch(baseUrl+quoteEnd+"/todays");
    const todays_data = await todays_response.json();

    res.render('pages/index', {
        random_quotes : random_data,
        todays_quotes : todays_data
    });
};
