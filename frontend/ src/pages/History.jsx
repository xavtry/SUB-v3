import React, { useEffect, useState } from "react";
import { getHistory } from "../utils/storage";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="history-page">
      <h2>History</h2>

      {history.length === 0 && <p>No history… start browsing!</p>}

      <ul>
        {history.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

