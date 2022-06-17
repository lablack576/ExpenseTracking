import { FaTimes } from "react-icons/fa";

const HistoryCamp = ({ historycomp, onDelete }) => {
  return (
    <historycamp
      className="historycamp"
      style={{
        borderLeft: "5px solid",
        borderColor: historycomp.amount > 0 ? "#5da55d" : "#f44336",
      }}
    >
      <div>
        {" "}
        <h4>{historycomp.text}</h4>
        <p>
          <strong
            style={{
              color: historycomp.amount > 0 ? "#5da55d" : "#f44336",
            }}
          >
            $
            {historycomp.amount > 0
              ? historycomp.amount
              : Math.abs(historycomp.amount)}
          </strong>
        </p>
      </div>
      <FaTimes
        onClick={() => onDelete(historycomp.id)}
        style={{ color: "#f44336" }}
        size={24}
      />
    </historycamp>
  );
};

export default HistoryCamp;
