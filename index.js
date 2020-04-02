"use strict";

let lastResult;

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}
let num1;
let num2;
let operator;
let answer;
alert("ПРИВЕТ!!! меня зовут Василек и я универсальная машина вычисления!");
function first() {
  num1 = prompt("скажи мне первое число или это будет 0 (number1)", 0);

  // ЛОГИЧЕСКИЕ ОПЕРАЦИИ ДЛЯ NUM 1;=============

  if (num1 === null) {
    alert("Good bye!");
  } else if (isNaN(+num1)) {
    alert("ты че долбоеб читать не умеешь?");
    num1 = prompt("введи ЦИФРУ или не трогай будет 0 (number1)", 0);
    {
      // начало вложений для попытки номер 2
      if (num1 === null) {
        alert("Good bye!");
      } else if (isNaN(+num1)) {
        alert("Всё, иди ...!");
      } else {
        num1 = +num1;
        num2 = prompt("скажи мне второе число или это будет 0 (number2)", 0);
      }
    } // конец вложеный их для 2 попытки импута
    //=======================================================================>
  } // в случаее если значение нормальное число ТО
  else {
    num1 = +num1;
    num2 = prompt("скажи мне второе число или это будет 0 (number2)", 0);
  }
  //КОНЕЦ ЛОШГИЧЕСКИЙ ОПЕРАЦИИ ДЛЯ NUM1;

  //=======================================>

  // НАЧАЛО ЛОГИЧЕСКИХ ОПЕРАЦИИ NUM2

  // добавляем запись если НАМ 2 был необъявлен А ИМЕННО ОСТАЛСЯ АНДЕФАИНД получаем просто нулл ничего не выполняем
  if (num2 === undefined) {
    null;
  } else if (num2 === null) {
    alert("Good bye!");
  } else if (isNaN(+num2)) {
    alert("ты че долбоеб читать не умеешь?");
    num2 = prompt("введи ЦИФРУ или не трогай будет 0 (number2)", 0);
    {
      // начало вложений для попытки номер 2
      if (num2 === undefined) {
        null;
      } else if (num2 === null) {
        alert("Good bye!");
      } else if (isNaN(+num2)) {
        alert("Всё, иди ...!");
      } else {
        num2 = +num2;
        operator = prompt(
          "что будем делать? add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
        ).toLowerCase();
      }
    } // конец вложеный их для 2 попытки импута
    //=======================================================================>
  } // в случаее если значение нормальное число ТО
  else {
    num2 = +num2;
    operator = prompt(
      "что будем делать? add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
    ).toLowerCase();
  }
  //КОНЕЦ ЛОШГИЧЕСКИЙ ОПЕРАЦИИ ДЛЯ NUM2;

  //==========================>
  // НАЧАЛО логических операции для оператора

  switch (operator) {
    case "add": {
      lastResult = add(num1, num2);
      break;
    }
    case "sub": {
      lastResult = sub(num1, num2);
      break;
    }
    case "mult": {
      lastResult = mult(num1, num2);
      break;
    }
    case "div": {
      lastResult = div(num1, num2);
      break;
    }
    case null: {
      alert("Good bye!");
      break;
    }
    case undefined: {
      null;
      break;
    }
    default: {
      alert("ну напечатай нормально уебок 'add' / 'sub' / 'mult' / 'div'");
      operator = prompt(
        "что будем делать ? add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
      ).toLowerCase();
      switch (operator) {
        case "add": {
          lastResult = add(num1, num2);
          break;
        }
        case "sub": {
          lastResult = sub(num1, num2);
          break;
        }
        case "mult": {
          lastResult = mult(num1, num2);
          break;
        }
        case "div": {
          lastResult = div(num1, num2);
          break;
        }
        case null: {
          alert("Good bye!");
          break;
        }
        case undefined: {
          null;
          break;
        }
        default: {
          alert("Всё, иди нахуй!");
          lastResult = null;
        }
      }
    }
  }
  //finalo4ka funktsii
  if (typeof lastResult == "number") {
    alert("равно: " + lastResult);
    return lastResult;
  } else if (lastResult === null) {
    null;
  }
} // КОНЕЦ ФУНКЦИИ

function calcAgain() {
  if (lastResult === undefined) {
    return null;
  } else if (lastResult === null) {
    return null;
  }
  for (let i = 0; i < 100; i++) {
    answer = confirm("продолжить вычисления?");
    if (answer === false) {
      alert("Good bye! Last result = " + lastResult);

      break;
    } else {
      second();
      if (num2 === null) {
        break;
      }
    }
  }
}

function second() {
  alert("Результат предидущей операции num1 = " + lastResult);
  num2 = prompt("скажи мне второе число или это будет 0 (number2)", 0);
  if (num2 === undefined) {
    null;
  } else if (num2 === null) {
    alert("Good bye!");
  } else if (isNaN(+num2)) {
    alert("ты че долбоеб читать не умеешь?");
    num2 = prompt("введи ЦИФРУ или не трогай будет 0 (number2)", 0);
    {
      // начало вложений для попытки номер 2
      if (num2 === undefined) {
        null;
      } else if (num2 === null) {
        alert("Good bye!");
      } else if (isNaN(+num2)) {
        alert("Всё, иди ...!");
      } else {
        num2 = +num2;
        operator = prompt(
          "add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
        ).toLowerCase();
      }
    } // конец вложеный их для 2 попытки импута
    //=======================================================================>
  } // в случаее если значение нормальное число ТО
  else {
    num2 = +num2;
    operator = prompt(
      "что будем делать ? add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
    ).toLowerCase();
  }

  //КОНЕЦ ЛОШГИЧЕСКИЙ ОПЕРАЦИИ ДЛЯ NUM2;

  //================> operator logic
  switch (operator) {
    case "add": {
      lastResult = add(lastResult, num2);
      break;
    }
    case "sub": {
      lastResult = sub(lastResult, num2);
      break;
    }
    case "mult": {
      lastResult = mult(lastResult, num2);
      break;
    }
    case "div": {
      lastResult = div(lastResult, num2);
      break;
    }
    case null: {
      alert("Good bye!");
      break;
    }
    case undefined: {
      null;
      break;
    }
    default: {
      alert("ну напечатай нормально уебок 'add' / 'sub' / 'mult' / 'div'");
      operator = prompt(
        "что будем делать ? add(сложить), sub(вычeсть), mult(умножить) or div(делить)"
      ).toLowerCase();
      switch (operator) {
        case "add": {
          lastResult = add(lastResult, num2);
          break;
        }
        case "sub": {
          lastResult = sub(lastResult, num2);
          break;
        }
        case "mult": {
          lastResult = mult(lastResult, num2);
          break;
        }
        case "div": {
          lastResult = div(lastResult, num2);
          break;
        }
        case null: {
          alert("Good bye!");
          break;
        }
        case undefined: {
          null;
          break;
        }
        default: {
          alert("Всё, иди нахуй!");
          lastResult = null;
        }
      }
    }
  }
  //finalo4ka funktsii
  if (num2 === null) {
    return null;
  } else if (typeof lastResult == "number") {
    return alert("равно: " + lastResult);
  } else if (lastResult === null) {
    null;
  }
} // КОНЕЦ ФУНКЦИИ

function calc() {
  first();
  calcAgain();
}
