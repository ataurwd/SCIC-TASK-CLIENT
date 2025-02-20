import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex">
      <div  className={`${
          isCollapsed ? "md:w-16 w-10" : "md:w-72 w-20 px-3"
        } min-h-screen transition-all duration-300 bg-green-500 pt-5`}>
        <button
          className={`${
            isCollapsed ? "justify-center" : "justify-end"
          } grid grid-cols-2  p-4 text-white hidden md:block cursor-pointer`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <FiChevronRight size={24} />
          ) : (
            <FiChevronLeft size={24} />
          )}
        </button>

        <div className="rounded-md p-4 bg-white md:my-2">
          <NavLink
            to={"add-task"}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "text-primary" : "text-black"} ${
                isCollapsed ? "justify-center" : "md:ml-5"
              }`
            }
          >
            <CiCirclePlus className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
            <span className="hidden sm:inline">
              {!isCollapsed && "Add Task"}
            </span>
          </NavLink>
        </div>
        <div className="rounded-md p-4 bg-white md:my-2 mt-1">
          <NavLink
            to={"recorded-task"}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "text-primary" : "text-black"} ${
                isCollapsed ? "justify-center" : "md:ml-5"
              }`
            }
          >
            <GoTasklist className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
            <span className="hidden sm:inline">
              {!isCollapsed && "Recorded Task"}
            </span>
          </NavLink>
        </div>
      </div>
          <div className="flex-1">
              <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
