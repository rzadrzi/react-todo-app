import React from "react";
import "./oneTask.component";

export const OneTask = ({ props, search, setSearch }: any) => {
  const delTask = (e: any) => {
    let del = search.filter((el: any) => {
      return el !== props;
    });
    setSearch(del);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary" onClick={delTask}>
          Completed
        </a>
      </div>
    </div>
  );
};
