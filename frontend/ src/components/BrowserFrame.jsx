import React, { useState, useEffect } from "react";

export default function BrowserFrame({ url, setURL }) {
  const [input, setInput] = useState(url);

  useEffect(() => setInput(url), [url]);

  const load = () => {
    if (!input.startsWith("http")) {
      setURL(`/proxy?url=https://${input}`);
    } else {
      setURL(`/proxy?url=${input}`);
    }
  };

  return (
    <div className="browser-frame">
      <div className="address-bar">
        <input value={input} onChange={e=>setInput(e.target.value)} />
        <button onClick={load}>Go</button>
      </div>

      <iframe
        src={url}
        className="frame"
        sandbox="allow-forms allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

