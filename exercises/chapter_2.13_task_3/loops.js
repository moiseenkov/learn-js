'use strict';

let number = undefined
while (true) {
    number = prompt('Enter number larger than 100')
    if (number === null)
        break
    if (Number(number) > 100)
        break
}
