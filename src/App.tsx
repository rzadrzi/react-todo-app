import React from "react";
import "./App.scss";
import { Form } from "./components/form.component";
import { ListTask } from "./components/listTask.component";

type Task = {
  name: string;
  description: string;
};

function App() {
  const [tasks, setTaskes] = React.useState<Task[]>([]);

  React.useEffect(() => {
    // console.log(search);
  }, [tasks]);

  return (
    <div className="App container">
      <Form tasks={tasks} setTaskes={setTaskes} />
      <ListTask tasks={tasks} setTaskes={setTaskes} />
    </div>
  );
}

export default App;
