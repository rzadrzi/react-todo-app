import React from "react";
import "./App.scss";
import { Form } from "./components/form.component";
import { ListTask } from "./components/listTask.component";

type Task = {
  name: string;
  description: string;
};

function App() {
  const [search, setSearch] = React.useState<Task[]>([]);

  React.useEffect(() => {
    // console.log(search);
  }, [search]);

  return (
    <div className="App container">
      <Form setSearch={setSearch} search={search} />
      <ListTask setSearch={setSearch} search={search} />
    </div>
  );
}

export default App;
