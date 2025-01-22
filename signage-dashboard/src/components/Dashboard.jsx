import React, { useState } from "react";
import ContentCreator from "./ContentCreator";
import { io } from "socket.io-client";
import "./Dashboard.css"; // Created a separate CSS file for styling

const socket = io("http://localhost:5000");

const Dashboard = () => {
  //Maintining proper dashboard
  const [content, setContent] = useState([]);
  const [currentCanvas, setCurrentCanvas] = useState(null);

  const saveContent = () => {
    if (currentCanvas) {
      const contentJSON = currentCanvas.toJSON();
      setContent([...content, contentJSON]);
      socket.emit("new-content", contentJSON);
      alert("Content saved and sent to display app!");
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Digital Signage Dashboard</h1>
      <div className="content-creator-container">
        <ContentCreator onSave={setCurrentCanvas} />
      </div>

      <button className="save-btn" onClick={saveContent}>
        Save Content
      </button>

      <div className="content-list-container">
        <h2 className="content-list-title">Saved Content</h2>
        <ul className="content-list">
          {content.length === 0 ? (
            <li className="no-content">No content saved yet.</li>
          ) : (
            content.map((item, index) => (
              <li key={index} className="content-item">
                Content #{index + 1}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
