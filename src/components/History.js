import HistoryCamp from "./HistoryCamp";
export const History = ({ history, onDelete }) => {
  return (
    <>
      <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
        History
      </h2>
      {history.length > 0
        ? history.map((historycomp, index) => (
            <HistoryCamp
              onDelete={onDelete}
              key={index}
              historycomp={historycomp}
            />
          ))
        : "History list is empty."}
    </>
  );
};
