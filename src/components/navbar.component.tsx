import "./navbar.component.scss";
export const Navbar = () => {
  return (
    <nav className="">
      <div>
        <ul>
          <li>
            <button className="btn btn-primary">+ Add New Task</button>
          </li>
          <li>
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Search"
            //   style={{ width: "200px" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
