document.addEventListener('DOMContentLoaded', () => {
  const cryptoList = document.getElementById('crypto-list');
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  const loginBtn = document.getElementById('login-btn');
  const loginForm = document.getElementById('login-form');

  if (loginBtn && loginForm) {
    loginBtn.addEventListener('click', () => {
      loginForm.style.display = loginForm.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  const cryptoLists = [
    { id: 'bitcoin', name: 'Bitcoin (BTC)' },
    { id: 'ethereum', name: 'Ethereum (ETH)' },
    { id: 'cardano', name: 'Cardano (ADA)' },
    { id: 'solana', name: 'Solana (SOL)' }
  ];

  const cryptoListContainer = document.getElementById('crypto-list');

  async function fetchCryptoData() {
    const ids = cryptoLists.map(coin => coin.id).join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      cryptoListContainer.innerHTML = ''; // Clear existing content

      cryptoLists.forEach(coin => {
        const price = data[coin.id].usd;
        const change = data[coin.id].usd_24h_change.toFixed(2);
        const changeColor = change >= 0 ? 'green' : 'red';

        const card = document.createElement('div');
        card.className = 'crypto-card';
        card.innerHTML = `
          <h3>${coin.name}</h3>
          <br>
          <p>Price: $${price.toLocaleString()}</p>
          <p style="color:${changeColor};">Change: ${change}%</p>
        `;
        cryptoListContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  }

  fetchCryptoData();
  setInterval(fetchCryptoData, 30000); // refresh every 30 sec

  // async function fetchPrices() {
  //   const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin');
  //   const data = await res.json();
  //   renderCrypto(data);
  // }

  // function renderCrypto(coins) {
  //   cryptoList.innerHTML = '';
  //   coins.forEach(coin => {
  //     const card = document.createElement('div');
  //     card.className = 'crypto-card';
  //     card.innerHTML = `
  //       <h3>${coin.name}</h3>
  //       <p>Price: $${coin.current_price}</p>
  //       <p>Change: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
  //     `;
  //     cryptoList.appendChild(card);
  //   });
  // }

  fetchPrices();
  setInterval(fetchPrices, 30000); // refresh every 30s

  // Buy/Sell Button Logic
  const buyBtn = document.getElementById("buy-btn");
  const sellBtn = document.getElementById("sell-btn");

  buyBtn?.addEventListener("click", function () {
    const crypto = document.getElementById("crypto-select").value;
    const amount = document.getElementById("amount").value;
    if (amount) {
      alert(`Buy Order:\nYou are buying ${amount} units of ${crypto}`);
    } else {
      alert("Please enter an amount to buy.");
    }
  });

  sellBtn?.addEventListener("click", function () {
    const crypto = document.getElementById("crypto-select").value;
    const amount = document.getElementById("amount").value;
    if (amount) {
      alert(`Sell Order:\nYou are selling ${amount} units of ${crypto}`);
    } else {
      alert("Please enter an amount to sell.");
    }
  });
});
