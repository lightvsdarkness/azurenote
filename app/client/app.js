var main = function () {
"use strict";
var insertCountsIntoDOM = function (counts) {
// ����� ��� ��� ���������� ���������� DOM
};
// �������� �������� counts ������ 5 ������
// � ������� ����������� �������� � DOM
setInterval(function () {
$.getJSON("counts.json", insertCountsIntoDOM);
}, 5000);
}
$(document).ready(main);