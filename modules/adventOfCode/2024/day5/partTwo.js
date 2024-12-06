const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8");

// Разделяем данные на правила и обновления
let [rules, updates] = data.split("\r\n\r\n");

// Обрабатываем правила и обновления
rules = rules.split("\r\n").map(rule => rule.split("|"));
updates = updates.split("\r\n").map(update => update.split(","));

// Функция для проверки порядка обновлений
const isOrdered = (update, rules) => {
  for (let i = 0; i < update.length - 1; i++) {
    // Проверяем, есть ли правило для текущей и следующей пары
    if (
      !rules.find(rule => rule[0] === update[i] && rule[1] === update[i + 1])
    ) {
      return false; // Если не нашли правило, возвращаем false
    }
  }
  return true; // Возвращаем true, если все пары корректны
};

// Функция для упорядочивания обновлений
const orderList = (update, rules) => {
  const dic = {};
  const ordered = [];

  update.forEach(page => {
    dic[page] = rules
      .filter(rule => rule[0] === page)
      .map(rule => rule[1])
      .filter(rule => update.includes(rule));
  });
  console.log(dic);
  while (Object.keys(dic).length) {
    const lastPage = Object.keys(dic).find(key => dic[key].length === 0);

    for (const key in dic) {
      dic[key] = dic[key].filter(item => item !== lastPage);
    }
    delete dic[lastPage];
    ordered.unshift(lastPage);
  }
  return ordered;
};

// Подсчет суммы средних значений обновлений
const part1 = updates.reduce((acc, update) => {
  if (!isOrdered(update, rules)) return acc; // Если порядок неверный, пропускаем

  const midIndex = Math.floor(update.length / 2);
  const mid = parseInt(update[midIndex]); // Получаем среднее значение
  acc += mid; // Добавляем к аккумулятору
  return acc;
}, 0);

const part2 = updates.reduce((acc, update) => {
  if (isOrdered(update, rules)) return acc; // Если порядок верный, пропускаем

  update = orderList(update, rules);
  const midIndex = Math.floor(update.length / 2);
  const mid = parseInt(update[midIndex]); // Получаем среднее значение
  acc += mid; // Добавляем к аккумулятору
  return acc;
}, 0);

console.log(part2); // Выводим результат для part2
