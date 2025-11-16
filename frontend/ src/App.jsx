import React, { useState } from "react";
import TabBar from "./components/TabBar";
import BrowserFrame from "./components/BrowserFrame";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Home", url: "home", active: true }
  ]);

  const openTab = (url) => {
    const id = Date.now();
    setTabs([...tabs.map(t => ({ ...t, active: false })), {
      id,
      title: url,
      url,
      active: true
    }]);
  };

  const updateActiveURL = (url) => {
    setTabs(
      tabs.map((t) =>
        t.active ? { ...t, url, title: url } : t
      )
    );
  };

  return (
    <div className="browser-root">
      <TabBar tabs={tabs} setTabs={setTabs} />
      {tabs.find(t => t.active).url === "home" ? (
        <HomeScreen openTab={openTab} />
      ) : (
        <BrowserFrame url={tabs.find(t=>t.active).url} setURL={updateActiveURL}/>
      )}
    </div>
  );
}

