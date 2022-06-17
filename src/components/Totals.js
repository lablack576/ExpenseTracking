const Totals = ({ income, expense }) => {
  return (
    <totals className="totals grid grid--2-cols">
      <div>
        <p>INCOME</p>
        <p style={{ color: income ? "#5da55d" : "#f44336" }}>
          <strong>${income}</strong>
        </p>
      </div>
      <div>
        <p>EXPENSE</p>
        <p style={{ color: income ? "#f44336" : "#5da55d" }}>
          <strong>${expense}</strong>
        </p>
      </div>
    </totals>
  );
};

export default Totals;
