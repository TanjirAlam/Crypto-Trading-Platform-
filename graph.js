// const ctx = document.getElementById('coinChart').getContext('2d');
// let chart;

// async function fetchData(coin) {
//   const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&interval=hourly`);
//   const data = await res.json();
//   const prices = data.prices.map(p => ({ x: new Date(p[0]), y: p[1] }));
//   return prices;
// }

// async function updateChart(coin) {
//   const prices = await fetchData(coin);
//   if (chart) chart.destroy();

//   chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       datasets: [{
//         label: `${coin.toUpperCase()} Price (USD)`,
//         data: prices,
//         borderColor: '#00c3ff',
//         backgroundColor: 'rgba(0, 195, 255, 0.1)',
//         fill: true,
//         tension: 0.3
//       }]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         x: {
//           type: 'time',
//           time: {
//             unit: 'hour'
//           }
//         },
//         y: {
//           beginAtZero: false
//         }
//       }
//     }
//   });
// }

// document.getElementById('coin').addEventListener('change', e => {
//   updateChart(e.target.value);
// });

// // Initial load
// updateChart('bitcoin');

const ctx = document.getElementById('coinChart').getContext('2d');
let chart;

document.getElementById('select-coin-btn').addEventListener('click', () => {
  const coin = document.getElementById('coin').value;
  fetchCoinData(coin);
});

async function fetchCoinData(coin) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`);
  const data = await res.json();
  const prices = data.prices;

  const labels = prices.map(p => new Date(p[0]).toLocaleTimeString());
  const values = prices.map(p => p[1]);

  if (chart) chart.destroy(); // Destroy old chart before creating new one

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${coin.toUpperCase()} Price (USD)`,
        data: values,
        borderColor: '#007bff',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { display: true, title: { display: true, text: 'Time' } },
        y: { display: true, title: { display: true, text: 'Price (USD)' } }
      }
    }
  });
}
