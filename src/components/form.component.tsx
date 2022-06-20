import React from "react";
import "./form.component.scss";

export const Form: React.FunctionComponent<any> = ({
  setSearch,
  search,
}: any) => {
  const [name, setName] = React.useState<any>("");
  const [description, setDescription] = React.useState<any>("");

  // React.useEffect(() => {
  //   console.log(search);
  // }, [search]);

  const onSubmit = (e: any) => {
    return setSearch([...search, { name: name, description: description }]);
    // if (search.length > 0) {
    //   search.find((el: any) => {
    //     if (el.name === name) {
    //       return search;
    //     } else {
    //       return setSearch([
    //         ...search,
    //         { name: name, description: description },
    //       ]);
    //     }
    //   });
    // } else {
    //   return setSearch([...search, { name: name, description: description }]);
    // }
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
