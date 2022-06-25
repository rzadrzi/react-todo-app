import React from "react";
import { OneTask } from "./oneTask.component";
import "./listTask.component.scss";

export const ListTask = ({ tasks, setTasks }: any) => {
  return (
    <div className="list">
      {tasks.map((el: any) => {
        return (
          <OneTask props={el} tasks={tasks} setTasks={setTasks} key={el.id} />
        );
      })}
    </div>
  );
};
