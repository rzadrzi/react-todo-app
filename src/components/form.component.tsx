import React from "react";
import "./form.component.scss";

export const Form: React.FunctionComponent<any> = ({
  setSearch,
  search,
}: any) => {
  const [name, setName] = React.useState<any>("");
  const [description, setDescription] = React.useState<any>("");

  const onSubmit = (e: any) => {
    setSearch([...search, { name: name, description: description }]);
    // event.preventDefault();
    // console.log(e);
  };
  return (
    <div className="reza-form form-group">
      <div className="mb-3 ">
        <input
          type="text"
          className="form-control"
          placeholder="task name"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<any>) =>
            setName(e.currentTarget.value)
          }
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e: React.ChangeEvent<any>) =>
            setDescription(e.currentTarget.value)
          }
        ></textarea>
      </div>
      <div>
        <input
          type="submit"
          className="btn btn-primary form-group"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};
