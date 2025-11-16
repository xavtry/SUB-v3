import React from "react";

export default function HomeScreen({ openTab }) {
  return (
    <div className="home-screen">
      <h1>SUB v3</h1>
      <p>Mini Browser • Proxy • Tabs</p>

      <div className="quick-links">
        <button onClick={() => openTab("google.com")}>Google</button>
        <button onClick={() => openTab("youtube.com")}>YouTube</button>
        <button onClick={() => openTab("reddit.com")}>Reddit</button>
      </div>
    </div>
  );
}

