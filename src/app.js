/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "The dog ",
    "My grandma ",
    "The mailman ",
    "My bird ",
    "My cat ",
    "My brother ",
    "The president "
  ];
  let action = [
    "ate ",
    "peed ",
    "crushed ",
    "broke ",
    "destroyed ",
    "lost ",
    "kicked ",
    "punched "
  ];
  let what = [
    "my homework ",
    "my phone ",
    "the car ",
    "my ID ",
    "my house ",
    "my bike ",
    "the computer ",
    "the country "
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "when I was in the bathroom",
    "when I was coding",
    "after the meeting"
  ];

  let randWho = Math.floor(Math.random() * who.length);
  let randAction = Math.floor(Math.random() * action.length);
  let randWhat = Math.floor(Math.random() * what.length);
  let randWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[randWho] + action[randAction] + what[randWhat] + when[randWhen];
};
