export function addHistory(url) {
  let h = JSON.parse(localStorage.getItem("history") || "[]");
  h.push(url);
  localStorage.setItem("history", JSON.stringify(h));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem("history") || "[]");
}

export function clearHistory() {
  localStorage.setItem("history", "[]");
}

export function addDownload(file) {
  let d = JSON.parse(localStorage.getItem("downloads") || "[]");
  d.push(file);
  localStorage.setItem("downloads", JSON.stringify(d));
}

export function getDownloads() {
  return JSON.parse(localStorage.getItem("downloads") || "[]");
}

export function clearDownloads() {
  localStorage.setItem("downloads", "[]");
}

