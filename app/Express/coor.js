var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter;

//console.log(credentials);

// настроим наш объект twitter
twitter = ntwitter(credentials);

// настроим поток twitter с трем€ параметрами,
// разделенными зап€тыми
twitter.stream(
// первый параметр Ч строка
"statuses/filter",
// второй параметр Ч объект, содержащий массив
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
// третий параметр Ч обратный вызов, срабатывающий, когда поток создан
function(stream) {
stream.on("data", function(tweet) {

console.log(tweet.text);

});
}
);