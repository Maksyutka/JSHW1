let a = +(prompt("Введите первое число диапазона"));
let b = +(prompt("Введите последнее число диапазона"));
let sum = 0;

while (a <= b) {
    sum += a;
    a++;
}

alert(sum);