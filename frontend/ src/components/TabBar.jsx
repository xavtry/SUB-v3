import React from "react";
import Tab from "./Tab";

export default function TabBar({ tabs, setTabs }) {

  const closeTab = (id) => {
    let newTabs = tabs.filter(t => t.id !== id);
    if (!newTabs.find(t => t.active)) {
      if (newTabs.length > 0) newTabs[newTabs.length - 1].active = true;
    }
    setTabs(newTabs);
  };

  const activateTab = (id) => {
    setTabs(tabs.map(t => ({ ...t, active: t.id === id })));
  };

  const newTab = () => {
    const id = Date.now();
    setTabs([
      ...tabs.map(t => ({ ...t, active: false })),
      { id, title: "Home", url: "home", active: true }
    ]);
  };

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <Tab key={tab.id} tab={tab} close={closeTab} activate={activateTab} />
      ))}
      <button className="new-tab" onClick={newTab}>+</button>
    </div>
  );
}

