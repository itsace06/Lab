WS
const tr = [
  { id: $1, type: "deposit", amount: 500, date: "2025-01-15" },
  { id: $2, type: "withdrawal", amount: 200, date: "2025-01-20" },
  { id: $3, type: "deposit", amount: 1000, date: "2025-02-10" },
  { id: $4, type: "withdrawal", amount: 300, date: "2025-02-18" },
];

// Bank Transaction Analyzer

// 1. Calculate the total balance
function calculateBalance(tr) {
  return transactions.reduce((balance, tx) => {
    if (tx.type === "deposit") {
      return balance + tx.amount;
    } else if (tx.type === "withdrawal") {
      return balance - tx.amount;
    }
    return balance;
  },0);
}

// 2. Filter transactions by type
function filterByType(tr, type) {
  return transactions.filter(tx => tx.type === type);
}

// 3. Find the largest transaction
function largestTransaction(tr) {
  return transactions.reduce((max, tx) =>
    tx.amount > max.amount ? tx : max
  , tr[0]);
}

// 4. Group transactions by month
function groupByMonth(tr) {
  return tr.reduce((groups, tx) => {
    const month = tx.date.slice(0, 7); // YYYY-MM
    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(tx);
    return groups;
  }, {});
}

// 5. Simulate fetching a new transaction
function fetchNewTransaction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTx = {
        id: Math.floor(Math.random() * 1000),
        type: Math.random() > 0.5 ? "deposit" : "withdrawal",
        amount: Math.floor(Math.random() * 1000) + 1,
        date: new Date().toISOString().slice(0, 10)
      };
      resolve(newTx);
    }, 1000); // simulating API delay
  });
}
x
// ==========================
// Example usage
// ==========================
const transactions = [
  { id: 1, type: "deposit", amount: 500, date: "2025-01-15" },
  { id: 2, type: "withdrawal", amount: 200, date: "2025-01-20" },
  { id: 3, type: "deposit", amount: 1000, date: "2025-02-10" },
  { id: 4, type: "withdrawal", amount: 300, date: "2025-02-18" },
];

console.log("Total Balance:", calculateBalance(tr));
console.log("Deposits:", filterByType(tr, "deposit"));
console.log("Largest Transaction:", largestTransaction(tr));
console.log("Grouped by Month:", groupByMonth(tr));

// Simulate fetching a new transaction
fetchNewTransaction().then(newTx => {
  console.log("Fetched new transaction:", newTx);
}); 

console.log(tr);






















