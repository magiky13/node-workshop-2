var request = require('request');

// //e1

// var requestJson = function(request(url, function(err, response, body) {
//     if (err) {
//         function(err) {
//             console.log('there is an error b');
//         }
//     }
//     else {
//         try {
//             var parseBody = JSON.parse(body) {
//                 function(null, parseBody) {
//                     console.log('yayz, something happened')
//                 }
//             }
//         }
//         catch (err) {
//             function(err) {
//                 console.log('this aint workin b')
//             }
//     }
// })
// });


// function requestJon(url, callBoss) {

var url = 'www.google.com';

function requestJson(url, callback) {
    request(url, function(err, res) {
        if (err) {
            callback(err);
        } else {
            try {
                var parsed = JSON.parse(res.body);
                callback(null, parsed);
            } catch (err) {
                callback(err);
            }
        }
    });
}

requestJson(url, function(err, res) {
    if(err) {
        console.log('this broken b');
    }
    else {
    console.log('what am i, i dunno');
    }
});







