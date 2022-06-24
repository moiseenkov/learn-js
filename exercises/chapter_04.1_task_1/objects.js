'use strict';

let user = {
  name: 'John',
  surname: 'Smith',
};

user.name = 'Pit';
delete user.surname;

for (let prop in user) {
  alert(`${prop} = ${user[prop]}`);
}
