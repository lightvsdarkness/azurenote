var express = require("express"),
http = require("http"),
tweetCounts = require("./tweet_counter.js"),
app = express();
// настраиваем приложение для использования клиентской папки для статичных файлов 
app.use(express.static(__dirname + "/client"));
// создаем HTTP-сервер на базе Express и начинаем слушать
http.createServer(app).listen(3000);
// настраиваем маршруты
app.get("/counts.json", function (req, res) {
// res.json возвращает весь объект целиком в виде файла JSON
res.json(tweetCounts);
});