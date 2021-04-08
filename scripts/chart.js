const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'asd',
    'asdsa',
    'asdada',
    'asdada',
    'asdsada'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Статистика за месяц',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 25, 30, 50, 70, 90, 200],
    }]
  };
const config = {
    type: 'line',
    data,
    options: {}
  };

const ctx = document.querySelector('#chart').getContext('2d');

const chart = new Chart(ctx, config);