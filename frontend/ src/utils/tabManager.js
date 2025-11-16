
export function createTab(url = "home") {
  return {
    id: Date.now(),
    title: url,
    url,
    active: true,
  };
}

export function activateTab(tabs, id) {
  return tabs.map((t) => ({ ...t, active: t.id === id }));
}

export function closeTab(tabs, id) {
  let newTabs = tabs.filter((t) => t.id !== id);

  // if no active tab, activate last one
  if (!newTabs.find((t) => t.active) && newTabs.length > 0) {
    newTabs[newTabs.length - 1].active = true;
  }

  return newTabs;
}
