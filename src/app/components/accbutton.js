import React from "react";
import "./acc.css";

function AccButton({ question, answer, isOpen, onToggle }) {
  return (
    <div className="acc-item">
      <button className={"acc-button"} onClick={onToggle}>
        <span>{question}</span>
        <span className="acc-icon">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="acc-content">{answer}</div>}
    </div>
  );
}
export default AccButton;
