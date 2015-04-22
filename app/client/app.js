var main = function () {
"use strict";
var insertCountsIntoDOM = function (counts) {
// здесь код для управления элементами DOM
};
// проверка значения counts каждые 5 секунд
// и вставка обновленных значений в DOM
setInterval(function () {
$.getJSON("counts.json", insertCountsIntoDOM);
}, 5000);
}
$(document).ready(main);