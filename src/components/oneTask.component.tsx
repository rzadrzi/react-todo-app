import React from "react";
import "./oneTask.component";

export const OneTask = ({ name, description }: any) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Completed
        </a>
      </div>
    </div>
  );
};
// style = { width: "18rem" };
