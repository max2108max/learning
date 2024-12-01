// Каков будет результат выполнения этого кода?
var value = 1;

function f() {
  if (1) {
    // так как ниже есть var value то он перемещаеться сюда и тут как будто стоит var value
    value = true;
  } else {
    var value = false;
  }
  console.log(value);
}

f();
console.log(value);

// Изменится ли внешняя переменная value ?

// P.S. Какими будут ответы, если из строки var value = false убрать var ?

// Ответ:
// Результатом будет true, т.к. var обработается и переменная будет создана до выполнения кода.

// Соответственно, присвоение value = true сработает на локальной переменной, и alert выведет true.

// Внешняя переменная не изменится.

// P.S. Если var нет, то в функции переменная не будет найдена. Интерпретатор обратится за ней в window и изменит её там.

// Так что без var результат будет также true, но внешняя переменная изменится.

for (const i = 0; i < array.length; i++) {}
// тоже самое что и
{
  const $$i = 0;
  for (const i = 0; i < array.length; i++) {
    const i = $$i;
  } // нельзя переопределять!!! а let можно!!!
}
