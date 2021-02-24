let num = prompt("Введите число!");
let amount = prompt("На сколько цифр его сдвинуть?");

alert(num.replace(RegExp("(\\d{" + amount + "})(\\d*)$"), "$2$1"));
