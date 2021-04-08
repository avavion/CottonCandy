// Общие функции графиков

// Получение количества дней в текущем месяце
const getMouthDays = () =>
  new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

// Получение текущего дня
const getCurrentDay = () => new Date().getDate();

// Получаем название месяца
const getMouth = () =>
  new Date().toLocaleString("ru-RU", {
    month: "long",
  });

const getDaysDateToDate = () => {
  let labels = [];
  for (let day = 1; day <= getCurrentDay(); day++) labels.push(day);
  return labels;
};

const data = {
  labels: getDaysDateToDate(),
  datasets: [
    {
      label: `Заработано за ${getMouth()}`,
      backgroundColor: "rgb(255, 97, 165)",
      borderColor: "rgb(255, 166, 204)",
      data: [2500, 7500, 5000, 12500, 5000, 0, 0, 0],
    },
  ],
};
const config = {
  type: "line",
  data,
  options: {
    responsive: true,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: "Рублей",
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: getMouth(),
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const ctx = document.querySelector("#chart").getContext("2d");
const chart = new Chart(ctx, config);
