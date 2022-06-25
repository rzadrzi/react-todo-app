import React from "react";
import "./oneTask.component";

export const OneTask = ({ props, tasks, setTasks }: any) => {
  const delTask = (e: any) => {
    if (Array.isArray(tasks)) {
      let del = tasks.filter((el: any) => el.name !== props.name);
      setTasks(del);
    } else {
      console.error("arr is not an array");
    }
  };
  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary" onClick={delTask}>
          Completed
        </button>
      </div>
    </div>
  );
};
