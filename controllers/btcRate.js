const request = require('request')
const url = 'http://api.kuna.io/v3/exchange-rates';
module.exports.btc=(req,res)=>{
    request({
        method: 'GET',
        url: url,
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let curr= JSON.parse(response.body)[3];
            res.send('Course Btc in Uah: '+String(curr[`uah`]))
        }
    })
}