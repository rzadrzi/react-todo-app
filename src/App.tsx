import React from "react";
import "./App.scss";
import { Form } from "./components/form.component";
// import { OneTask } from "./components/oneTask.component";

type Task = {
  name: string;
  description: string;
  //   is_complete: boolean;
};

function App() {
  const [search, setSearch] = React.useState<Task[]>([]);

  React.useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="App container">
      <Form setSearch={setSearch} search={search} />
      {/* <OneTask /> */}
    </div>
  );
}

export default App;
