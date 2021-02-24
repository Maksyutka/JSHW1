let even = 0;
let odd = 0;
let zero = 0;
let positive = 0;
let negative = 0;


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Введите число"), 10);

    if (num > 0) {
        if (num % 2 === 0) {
            even += 1;
            positive += 1;
        } else if (num % 2 == true) {
            odd += 1;
            positive += 1;
        }
    } else if (num == 0) {
        zero += 1;
    } else if (num < 0) {
        negative += 1;
    }
}

alert(`Чётные числа: ${even}, нечётные числа: ${odd}, положительные числа: ${positive}, отрицательные числа: ${negative}, нули: ${zero}.`);






