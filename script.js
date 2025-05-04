let openOrders = [];
let closedOrders = [];

function addOrder(type, crypto, amount) {
  const order = {
    type,
    crypto,
    amount,
    timestamp: new Date().toLocaleString()
  };
  openOrders.push(order);
  renderOrders();
}

function renderOrders() {
  const openList = document.getElementById('open-orders-list');
  const closedList = document.getElementById('closed-orders-list');

  openList.innerHTML = '';
  openOrders.forEach((order, index) => {
    const item = document.createElement('li');
    item.innerHTML = `${order.timestamp}: ${order.type.toUpperCase()} ${order.amount} ${order.crypto} 
      <button onclick="closeOrder(${index})">Close</button>`;
    openList.appendChild(item);
  });

  closedList.innerHTML = '';
  closedOrders.forEach(order => {
    const item = document.createElement('li');
    item.innerHTML = `${order.timestamp}: ${order.type.toUpperCase()} ${order.amount} ${order.crypto}`;
    closedList.appendChild(item);
  });
}

function closeOrder(index) {
  const order = openOrders.splice(index, 1)[0];
  closedOrders.push(order);
  renderOrders();
}

function toggleOrders(type) {
  document.getElementById('open-orders').style.display = (type === 'open') ? 'block' : 'none';
  document.getElementById('closed-orders').style.display = (type === 'closed') ? 'block' : 'none';
}

// Hook into buy/sell buttons
document.getElementById("buy-btn").addEventListener("click", function () {
  const crypto = document.getElementById("crypto-select").value;
  const amount = document.getElementById("amount").value;
  if (amount) {
    addOrder("buy", crypto, amount);
    alert(`Buy Order Placed: ${amount} units of ${crypto}`);
  } else {
    alert("Please enter an amount to buy.");
  }
});

document.getElementById("sell-btn").addEventListener("click", function () {
  const crypto = document.getElementById("crypto-select").value;
  const amount = document.getElementById("amount").value;
  if (amount) {
    addOrder("sell", crypto, amount);
    alert(`Sell Order Placed: ${amount} units of ${crypto}`);
  } else {
    alert("Please enter an amount to sell.");
  }
});
