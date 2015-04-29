var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter;

//console.log(credentials);

// �������� ��� ������ twitter
twitter = ntwitter(credentials);

// �������� ����� twitter � ����� �����������,
// ������������ ��������
twitter.stream(
// ������ �������� � ������
"statuses/filter",
// ������ �������� � ������, ���������� ������
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
// ������ �������� � �������� �����, �������������, ����� ����� ������
function(stream) {
stream.on("data", function(tweet) {

console.log(tweet.text);

});
}
);