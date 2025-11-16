import React from "react";

export default function Tab({ tab, close, activate }) {
  return (
    <div
      className={`tab ${tab.active ? "active" : ""}`}
      onClick={() => activate(tab.id)}
    >
      <span>{tab.title.slice(0, 15)}</span>
      <button onClick={(e) => { e.stopPropagation(); close(tab.id); }}>x</button>
    </div>
  );
}

