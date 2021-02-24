let answer = true;

while (answer == true) {

    let firstNumber = parseInt(prompt("Введите первое число"), 10);
    let operator = prompt("Введите знак");
    let secondNumber = parseInt(prompt("Введите второе число"), 10);
    let result = 0;

    if (operator == "+") {
        result = firstNumber + secondNumber;
    } else if (operator == "-") {
        result = firstNumber - secondNumber;
    } else if (operator == "*") {
        result = firstNumber * secondNumber;
    } else if (operator == "/") {
        result = firstNumber / secondNumber;
    }

    alert(result);

    answer = confirm("Хотите попробовать ещё?");

}


