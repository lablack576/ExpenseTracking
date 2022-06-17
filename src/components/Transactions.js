import { useState, useEffect } from "react";

const Transactions = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a text");
      return;
    }
    onAdd({ text, amount });

    setText("");
    setAmount("");
  };

  return (
    <>
      {" "}
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
        Add New Transaction
      </h2>
      <form onSubmit={onSubmit} className="add-form">
        <div className="form-control">
          <label>Texte</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>Amount : ( negative - expense, positive - income )</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="0"
          />
        </div>
        <input
          type="submit"
          value="Add Transaction"
          className="btn btn-block subButton"
        />
      </form>
    </>
  );
};

export default Transactions;
