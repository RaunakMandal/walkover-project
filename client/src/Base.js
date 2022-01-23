import React from "react";
import Menu from "./Menu";
const Base = ({ className = "bg-dark text-white p-4", children }) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className={className}>{children}</div>
    </div>
  </div>
);

export default Base;
