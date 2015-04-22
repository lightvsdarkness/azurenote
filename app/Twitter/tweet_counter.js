var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter,
counts = {};
// настроим объект twitter
twitter = ntwitter(credentials);
// обнуляем счетчики
counts.awesome = 0;
twitter.stream(
"statuses/filter",
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
function(stream) {
stream.on("data", function(tweet) {
if (tweet.indexOf("awesome") > -1) {
// приращение счетчика для слова awesome
counts.awesome = counts.awesome + 1;
}
});
}
);
// вводим счетчик каждые 3 секунды
setInterval(function () {
console.log("awesome: " + counts.awesome);
}, 3000);
module.exports = counts;