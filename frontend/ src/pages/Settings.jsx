import React from "react";
import { clearHistory, clearDownloads } from "../utils/storage";

export default function Settings() {
  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <button onClick={clearHistory}>Clear History</button>
      <button onClick={clearDownloads}>Clear Downloads</button>

      <p>More settings coming in SUB v4...</p>
    </div>
  );
}

