import { NavLink } from "react-router";

export const Tabs = () => {
  return (
    <div>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/todo" end>
          Todo
        </NavLink>
      </div>
    </div>
  );
};
