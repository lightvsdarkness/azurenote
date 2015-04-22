var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter,
counts = {};
// �������� ������ twitter
twitter = ntwitter(credentials);
// �������� ��������
counts.awesome = 0;
twitter.stream(
"statuses/filter",
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
function(stream) {
stream.on("data", function(tweet) {
if (tweet.indexOf("awesome") > -1) {
// ���������� �������� ��� ����� awesome
counts.awesome = counts.awesome + 1;
}
});
}
);
// ������ ������� ������ 3 �������
setInterval(function () {
console.log("awesome: " + counts.awesome);
}, 3000);
module.exports = counts;