import React from "react";
import { OneTask } from "./oneTask.component";
import "./listTask.component.scss";

export const ListTask = ({ search, setSearch }: any) => {
  return (
    <div className="list">
      {search.map((el: any) => {
        return (
          <OneTask
            props={el}
            search={search}
            setSearch={setSearch}
            key={el.id}
          />
        );
      })}
    </div>
  );
};
