"use client";

import { useState } from "react";
import AccButton from "./accbutton";
import "./acc.css";

function Acclist({ items }) {
  const [open, setOpen] = useState(0);

  function toggle(p) {
    setOpen((prev) => (prev === p ? null : p));
  }

  return (
    <div className="acc">
      <div className="acc-title">Sıkça sorulan sorular</div>

      {items.map((item) => (
        <AccButton
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={open === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

export default Acclist;
