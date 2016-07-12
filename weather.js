var fileTraveler = require('./library/request-json.js');
var url = 'www.google.com';
var requestJson = fileTraveler.requestJson;
var APIForecastSwag = 'https://api.forecast.io/forecast/443dcc23fd85031592d7942cc9c9ac39/';
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var prompt = require('prompt');
var request = require('request');

//var askUser = function(issLatitude, issLongitude) {
     prompt.get('userLocation', function(err, answer) {
        if (err) {
            console.log('sorry, there was an error');
        }
        else {
            var placeUrl = locationUrl + answer.userLocation;
            requestJson(placeUrl, function(err, data) {
                if (err) {
                    console.log('there was an error');
                }
                else {
                    var parseBody = data;
                    var userLatitude = parseBody.results[0].geometry.location.lat;
                    var userLongitude = parseBody.results[0].geometry.location.lng;
                    //console.log('user latitude ' + userLatitude); //to check my user latitude
                    //console.log('user longitude ' + userLongitude); //to check my user longitude
                    var APIForecast = APIForecastSwag + userLatitude + "," + userLongitude;
                    //console.log(APIForecast);
                    
                    requestJson(APIForecast, function(err, crazydata) {
                        if(err) {
                            console.log('you broke that shit');
                        }
                        else {
                            var weather1 = crazydata;
                            var userForecast = weather1.daily.data[0].summary;
                            console.log(userForecast);
                            
                            var forecastDays = weather1.daily.data.slice(1,5).map(function(a){
                                return a.summary;
                            });
                            console.log(forecastDays);
                        }
                    });
                }
            });
        }
    });
//};



'http://words.bighugelabs.com/api/2/b117bf91face5d6a30f4a2d2cd77c249/word/json'