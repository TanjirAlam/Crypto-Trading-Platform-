// // Profile modal handling
// const editBtn = document.getElementById('edit-profile-btn');
// const modal = document.getElementById('edit-modal');
// const closeBtn = document.getElementById('close-modal');
// const saveBtn = document.getElementById('save-profile');

// const nameField = document.getElementById('user-name');
// const emailField = document.getElementById('user-email');
// const editName = document.getElementById('edit-name');
// const editEmail = document.getElementById('edit-email');

// editBtn.addEventListener('click', () => {
//   editName.value = nameField.textContent;
//   editEmail.value = emailField.textContent;
//   modal.style.display = 'flex';
// });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// saveBtn.addEventListener('click', () => {
//   nameField.textContent = editName.value;
//   emailField.textContent = editEmail.value;
//   modal.style.display = 'none';
// });

 // new
 document.getElementById('edit-profile-btn').addEventListener('click', () => {
  document.getElementById('edit-modal').style.display = 'flex';
  document.getElementById('edit-name').value = document.getElementById('user-name').innerText;
  document.getElementById('edit-email').value = document.getElementById('user-email').innerText;
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('edit-modal').style.display = 'none';
});

document.getElementById('save-profile').addEventListener('click', () => {
  const newName = document.getElementById('edit-name').value;
  const newEmail = document.getElementById('edit-email').value;
  document.getElementById('user-name').innerText = newName;
  document.getElementById('user-email').innerText = newEmail;
  document.getElementById('edit-modal').style.display = 'none';
});

document.getElementById('start-trading').addEventListener('click', () => {
  window.location.href = 'index.html#trading-ui';
});
// tran
const transactions = [
  { date: '2025-04-01', type: 'Buy', crypto: 'Bitcoin', amount: '0.1 BTC', status: 'Completed' },
  { date: '2025-04-15', type: 'Sell', crypto: 'Ethereum', amount: '2 ETH', status: 'Completed' },
  { date: '2025-04-28', type: 'Buy', crypto: 'Solana', amount: '50 SOL', status: 'Pending' }
];

function renderTransactions() {
  const tbody = document.getElementById('transaction-history');
  transactions.forEach(tx => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.type}</td>
      <td>${tx.crypto}</td>
      <td>${tx.amount}</td>
      <td>${tx.status}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderPortfolioChart() {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Portfolio Value ($)',
        data: [14000, 15000, 16000, 18700, 18200],
        borderColor: '#00c3ff',
        backgroundColor: 'rgb(122, 203, 106)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
//bottom
window.addEventListener('DOMContentLoaded', () => {
  renderTransactions();
  renderPortfolioChart();
});
