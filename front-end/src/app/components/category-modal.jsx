"use client";

import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { DashboardContext } from "../context/dashboard_context";

export const CategoryModal = ({ children }) => {
  const { setCategoryName } = useContext(DashboardContext);
  const { addCategory } = useContext(DashboardContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="flex gap-3 items-center   text-gray-700 text-[11px] pl-2"
        onClick={() => setIsOpen(true)}
      >
        {" "}
        <FaPlus className="text-blue-600" />
        Add Category
      </button>
      <dialog open={isOpen} className="modal">
        <div className="modal-box max-w-[300px]">
          <div className="flex justify-between items-center border-b-[1px] mb-4">
            <p className="mb-2 text-xs font-semibold">Add Category</p>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <input
              type="text"
              className="border-2 rounded text-xs h-6 pl-2"
              placeholder="name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <button
              className="bg-lime-700 text-white rounded-lg text-xs w-45 h-6"
              onClick={addCategory}
            >
              Add
            </button>
          </div>
        </div>
      </dialog>
      {/* <dialog id="cat_modal_3" className="modal w-[300px]">
        <div className="modal-box">
          <form method="dialog">
            <div className="flex justify-between items-center border-b-[1px] mb-4">
              <p className="mb-2 text-xs font-semibold">Add Category</p>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </div>
          </form>
          <div className="flex flex-col w-40 gap-2">
            <input
              type="text"
              className="border-2 rounded text-xs h-6 pl-2"
              placeholder="name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <form method="dialog">
              <button
                className="bg-lime-700 text-white rounded-lg  w-40 text-xs w-45 h-6 hover:bg-slate-400 hover:text-black"
                onClick={addCategory}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog> */}
    </>
  );
};
