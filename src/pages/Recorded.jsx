import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Recorded = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["recorded"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_URL}/tasks`);
      return response.data;
    },
  });

  // delete task
  const handelDeleteTask = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_URL}/tasks/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  // update task
  const handleUpdateTask = async (id) => {};

  // add task
  const handleAddTask = async (title, description, category) => {
    await axios
      .post(`${import.meta.env.VITE_URL}/tasks`, {
        title,
        description,
        category,
      })
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
      {/* To-Do Section */}
      <div className="w-full">
        <h1 className="bg-yellow-200 text-center py-2 font-bold rounded-md">
          To-Do
        </h1>
        <div className="my-2 space-y-3 cursor-pointer">
          {tasks
            .filter((task) => task.category === "To-Do")
            .map((task) => (
              <div
                key={task.taskID}
                className="bg-yellow-100 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-500">{task.timestamp}</p>
                <div className="space-x-2 mt-2">
                  <button>
                    {" "}
                    <Link
                      to={`/dashboard/recorded-task/${task._id}`}
                      className="cursor-pointer"
                    >
                      <BiMessageSquareEdit size={25} />
                    </Link>
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handelDeleteTask(task._id)}
                  >
                    <RiDeleteBack2Line size={25} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* In Progress Section */}
      <div className="w-full">
        <h1 className="bg-blue-200 text-center py-2 font-bold rounded-md">
          In Progress
        </h1>
        <div className=" my-2 space-y-3 cursor-pointer">
          {tasks
            .filter((task) => task.category === "In Progress")
            .map((task) => (
              <div
                key={task.taskID}
                className="bg-blue-100 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-500">{task.timestamp}</p>
                <div className="space-x-2 mt-2">
                <button>
                    {" "}
                    <Link
                      to={`/dashboard/recorded-task/${task._id}`}
                      className="cursor-pointer"
                    >
                      <BiMessageSquareEdit size={25} />
                    </Link>
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handelDeleteTask(task._id)}
                  >
                    <RiDeleteBack2Line size={25} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Done Section */}
      <div className="w-full">
        <h1 className="bg-green-200 text-center py-2 font-bold rounded-md">
          Done
        </h1>
        <div className="my-2 space-y-3 cursor-pointer">
          {tasks
            .filter((task) => task.category === "Done")
            .map((task) => (
              <div
                key={task.taskID}
                className="bg-green-100 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-500">{task.timestamp}</p>
                <div className="space-x-2 mt-2">
                <button>
                    {" "}
                    <Link
                      to={`/dashboard/recorded-task/${task._id}`}
                      className="cursor-pointer"
                    >
                      <BiMessageSquareEdit size={25} />
                    </Link>
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handelDeleteTask(task._id)}
                  >
                    <RiDeleteBack2Line size={25} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recorded;
