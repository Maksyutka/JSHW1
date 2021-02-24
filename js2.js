let a = +(prompt("Введите первое число"));
let b = +(prompt("Введите второе число"));

function showDivider(a, b) {
    if (b) {
        return showDivider(b, a % b);
    } else {
        return a;
    }
}

let devider = showDivider(a, b);
alert("Ваш результат: " + devider);