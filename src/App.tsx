import React from "react";
import "./App.scss";
import { Form } from "./components/form.component";
import { ListTask } from "./components/listTask.component";

type Task = {
  name: string;
  description: string;
};

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    // console.log(tasks);
  }, [tasks]);

  return (
    <div className="App container">
      <Form tasks={tasks} setTasks={setTasks} />
      <hr />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
