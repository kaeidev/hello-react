import { NavLink } from "react-router";

export const Tabs = () => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <NavLink
            to="/"
            className={({ isActive }) => {
              const style = "inline-block p-4 border-b-2 rounded-t-lg";
              const activeStyle = " text-blue-600 border-blue-600 active";
              return isActive
                ? `${style} ${activeStyle}`
                : `${style} border-transparent hover:text-gray-600 hover:border-gray-300`;
            }}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="me-2">
          <NavLink
            to="/todo"
            className={({ isActive }) => {
              const style = "inline-block p-4 border-b-2 rounded-t-lg";
              const activeStyle = " text-blue-600 border-blue-600 active";
              return isActive
                ? `${style} ${activeStyle}`
                : `${style} border-transparent hover:text-gray-600 hover:border-gray-300`;
            }}
            end
          >
            Todo
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
