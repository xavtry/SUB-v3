import React, { useEffect, useState } from "react";
import { getDownloads } from "../utils/storage";

export default function Downloads() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(getDownloads());
  }, []);

  return (
    <div className="downloads-page">
      <h2>Downloads</h2>

      {files.length === 0 && <p>No downloads yet.</p>}

      <ul>
        {files.map((file, idx) => (
          <li key={idx}>{file}</li>
        ))}
      </ul>
    </div>
  );
}

