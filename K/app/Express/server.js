var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;


var coolObject = {my: 12345};
var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// �������� HTTP-������ �� ���� Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res) {
res.json(stream);
});


app.use(express.bodyParser());
app.post("/todos", function (req, res) {
  // ������ ������ ����������� � req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // ���������� ������� ������
  res.json({"message":"�� ���������� ������ �� �������!"});
});

