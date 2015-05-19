var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = 3000;
//port = process.env.PORT || 1337;


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

var mongoose=require("mongoose"),
mongoUrl="mongodb ://localhost/test";
mongoose.connect (mongoUrl);
var CommSchema = mongoose.Schema({
title : String,
commentariy : String
});
//�������� ������ Comm �� ����� CommSchema
var com1 = mongoose.model("Comm", CommSchema);


var c1 = new �om1({"title":"Doggie", "commentariy":"goodie"});
//���������� � ���������
c1.save(function (err) {
if (err !== null) {
// ������ �� ��� ��������
console.log(err);
} else {
console.log("������ �� ��� ��������!");
}
});

//����� ������
Comm.find({"title" : "bad"}, function (err, comments) {
  comments.forEach(function (com) {
    // ��������� ����������� � ���������� "bad"
    com.commentariy = "the best!";
    // ��������� ���������� �����������
    com.save(function (err) {
      if (err) {
        // ���� ������ �� ��� ��������
        console.log(err);
      }
    });
  });
});
//�������
Comm.remove({ "title":"bad", "commentariy":"the best!" }, function (err) {
  if (err !== null) {
    // ���� ������ �� ��� ������� ������
    console.log(err);
  }
  });

