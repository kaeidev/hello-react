import { NavLink } from "react-router";

const tabItems = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/todo",
    title: "Todo",
  },
];

export const Tabs = () => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {tabItems.map((item) => (
          <li className="me-2" key={item.title}>
            <NavLink
              to={item.to}
              className={({ isActive }) => {
                const style = "inline-block p-4 border-b-2 rounded-t-lg";
                const activeStyle = " text-red-600 border-red-600 active";
                return isActive
                  ? `${style} ${activeStyle}`
                  : `${style} border-transparent hover:text-gray-600 hover:border-gray-300`;
              }}
              end
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
