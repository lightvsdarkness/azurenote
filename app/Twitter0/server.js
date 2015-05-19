var express = require("express"),
http = require("http"),
tweetCounts = require("./tweet_counter.js"),
app = express();
// ����������� ���������� ��� ������������� ���������� ����� ��� ��������� ������ 
app.use(express.static(__dirname + "/client"));
// ������� HTTP-������ �� ���� Express � �������� �������
http.createServer(app).listen(3000);
// ����������� ��������
app.get("/counts.json", function (req, res) {
// res.json ���������� ���� ������ ������� � ���� ����� JSON
res.json(tweetCounts);
});