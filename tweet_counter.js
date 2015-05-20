var ntwitter = require('ntwitter'),
    credentials = require('./credentials1.json'),
    twitter,
    counts = {};

// set up our twitter objects
twitter = ntwitter(credentials);
//or
// var twitter = new ntwitter({
// consumer_key: "uj6bNhrj764xcZjdC5jlAuzaG",
// consumer_secret: "VGGIySdQfKybkpzCaa1VVIa5WSp0SsyEhazmxzLhgLKoAT8mwL",
// access_token_key: "3200306110-vs1irdCSFbyZX83p5mpccWXP5viw21UBt331bmT",
// access_token_secret: "M7jb1WIVIREB1L5RwOgF3ZEtE66PBwVMyDachAAdokvEk"
// });

// initialize our counters
counts.awesome = 0;

twitter.stream(
    'statuses/filter',
    { track: ["awesome"] },
    function(stream) {
        stream.on('data', function(data) {
        	//if (err !== null) {
        		//console.log("ERROR: " + err);
        	//}
				//handle error
    		if (data.text.indexOf("awesome") > -1) {
                // increment the awesome counter
                counts.awesome = counts.awesome + 1;
            }

// setInterval(function () {
//     console.log(data.text);
// }, 3000);
            
        });
        stream.on('end', function (response) {
	    // Handle a disconnection 
		});
		stream.on('destroy', function (response) {
		  // Handle a 'silent' disconnection from Twitter, no end/error event fired 
		});
		// Disconnect stream after five seconds 
		setTimeout(stream.destroy, 5000);
    }
);

setInterval(function () {
    console.log("awesome: " + counts.awesome);
}, 3000);

module.exports = counts;
