var x = document.getElementById('number1');
var y = document.getElementById('number2');

// Объекты для взаимодействия с браузером и их методы
console.log(x, y);
console.log(document.getElementById('1'));


document.getElementById('Submit').addEventListener('click', function() {
	document.write(+x.value + +y.value);
})
document.getElementById('sUbmit').addEventListener('click', function() {
	document.write(-x.value - -y.value);
})
document.getElementById('suBmit').addEventListener('click', function() {
	document.write(x.value / y.value);
})
document.getElementById('subMit').addEventListener('click', function() {
	document.write(x.value * y.value);
})
