'use strict';

let n = prompt('Enter positive number')
if (isNaN(Number(n)))
    alert(`Value ${n} isn't valid number`);
else if (n <= 0)
    alert(`Should be positive number`);
else {
    nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        alert( i ); // простое число
    }
}
