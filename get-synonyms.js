var fileTraveler = require('./library/synonym.js');
var SynonymAPI = fileTraveler.SynonymAPI;
prompt = require('prompt');

var key = 'b117bf91face5d6a30f4a2d2cd77c249';

prompt.get('whats yo word', function(err, res) {
        if (err) {
            console.log('sorry, there was an error');
        }
        else {
            var word = res.word;
            var mysteryObject = new SynonymAPI(key);
            mysteryObject.getSynonyms(word, function(err, data) {
                console.log(data);
                if(err) {
                    console.log('u fucked up');
                }
                else {
                    console.log(word);
                }
            });
        }
});


