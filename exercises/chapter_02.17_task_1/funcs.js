'use strict';

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


ask(
    'Are you agree?',
    () => alert('You agree'),
    () => alert('You are disagree')
);