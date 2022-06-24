'use strict';

let MIN = 14;
let MAX = 90;

let age = prompt('Enter age', 0);

if (isNaN(Number(age)))
    alert(`Value ${age} isn't valid age value`);
else
    if (age >= MIN && age <= MAX)
        alert(`Age ${age} belongs to interval [${MIN}; ${MAX}]`);
    else
        alert(`Age ${age} doesn't belong to interval [${MIN}; ${MAX}]`);
