import React from "react";
import "./acc.css";

function AccButton({ question, answer, isOpen, onToggle }) {
    return (
        <div className="acc-item"> 
        {/* row */}
            <button className={"acc-button"} onClick={onToggle}>
                {/*row-header  */}
                <span>{question}</span>
                <span className="acc-icon">{isOpen ? "-" : "+"}</span>
                {/* box */}
            </button>
            {isOpen && <div className="acc-content">{answer}</div>}
            {/* row-body */}
        </div>
    );
}
export default AccButton;