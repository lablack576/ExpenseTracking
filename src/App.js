import { useState, useEffect } from "react";
import Header from "./components/Header";
import Totals from "./components/Totals";
import Transactions from "./components/Transactions";
import { History } from "./components/History";
import Footer from "./components/Footer";
function App() {
  const [history, sethistory] = useState([
    {
      id: 1,
      text: "Xbox One - Day One Edition",
      amount: 500,
    },
    {
      id: 2,
      text: "Online Dropshipping Course",
      amount: 250,
    },
    {
      id: 4,
      text: "Grocery Shopping",
      amount: -200,
    },
    {
      id: 3,
      text: "Udemy Course",
      amount: 90,
    },
  ]);

  // Remove HistoryCamp

  const RemoveHistory = (id) => {
    sethistory(history.filter((history) => history.id !== id));
  };

  // Calculate All Incomes

  const IncomeCalculator = () => {
    let income = 0;
    history.map((historycomp) => {
      if (historycomp.amount > 0) {
        income += parseInt(historycomp.amount);
      }
    });
    return income;
  };

  // Calculate All Expenses

  const ExpenseCalculator = () => {
    let expense = 0;
    history.map((historycomp) => {
      if (historycomp.amount < 0) {
        expense += parseInt(historycomp.amount);
      }
    });
    return expense;
  };

  // Balance Calculator
  const BalanceCalculator = () => {
    return IncomeCalculator() - Math.abs(ExpenseCalculator());
  };

  // Add Transaction

  const AddTransaction = (transaction) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const NewTransaction = { id, ...transaction };
    sethistory([...history, NewTransaction]);
  };

  return (
    <div className="container">
      <Header title="Track Your Daily Expenses" balance={BalanceCalculator()} />
      <Totals
        income={IncomeCalculator()}
        expense={Math.abs(ExpenseCalculator())}
      />
      <History history={history} onDelete={RemoveHistory} />
      <Transactions onAdd={AddTransaction} />
      <Footer />
    </div>
  );
}

export default App;
