import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="big-header">To-Do list</h1>
      <div className="add-task-container">
        <p className="first-p">Click here to add task:</p>
        <img
          className="button-plus"
          src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
          alt="buttonpng"
          border="0"
        />
      </div>
    </div>
  );
}

export default App;
