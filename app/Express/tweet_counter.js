var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter,
counts = {};
var tweet = "Это твит";
// íàñòðîèì îáúåêò twitter
twitter = ntwitter(credentials);
// îáíóëÿåì ñ÷åò÷èêè
counts.awesome = 0;

twitter.stream(
"statuses/filter",
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
function(stream) {
	stream.on("data", function(tweet) {
		//console.log(tweet.text);
		if (tweet.text.indexOf("awesome") > -1) {
		// ïðèðàùåíèå ñ÷åò÷èêà äëÿ ñëîâà awesome
		counts.awesome = counts.awesome + 1;
		}
	});
});
// ââîäèì ñ÷åò÷èê êàæäûå 3 ñåêóíäû
setInterval(function () {
	//console.log("awesome: " + counts.awesome);
}, 3000);

module.exports = counts;