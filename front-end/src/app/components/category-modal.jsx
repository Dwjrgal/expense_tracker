import { FaPlus } from "react-icons/fa6";

export const CategoryModal = () => {
  return (
    <>
      <button
        className="flex gap-3 items-center ml-2  text-gray-700 text-[11px]"
        onClick={() => document.getElementById("cat_modal_3").showModal()}
      >
        {" "}
        <FaPlus className="text-blue-600" />
        Add Category
      </button>
      <dialog id="cat_modal_3" className="modal w-[300px]">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col w-40 gap-2 items-center">
            <input
              type="text"
              className="border-2 rounded text-xs h-6"
              placeholder="category name"
            />
            <button className="bg-lime-700 text-white rounded text-xs w-20 h-5">
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
