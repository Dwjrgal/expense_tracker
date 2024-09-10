import React from "react";
import { PiPlusThin } from "react-icons/pi";

const RecordModal = () => {
  return (
    <div>
      <button
        className=" w-[150px] h-5 bg-blue-600 rounded-xl text-white  flex justify-center items-center gap-1 text-xs"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <PiPlusThin className="text-white text-lg" />
        Add
      </button>
      <dialog id="my_modal_3" className="modal w-[400px]">
        <div className="modal-box pr-7">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 py-4">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-sm pb-5">Add Records</h3>
          <div className="w-60 h-60 flex flex-col px-5">
            {/* <div className="flex">
              <button className="join-item btn border rounded-full bg-blue-700 text-white">
                Expense
              </button>
              <button className="join-item btn border rounded-full">
                Income
              </button>
            </div> */}

            <div className="flex flex-col mt-5 w-72">
              <p className="font-semibold text-xs mb-1">Amount</p>
              <input
                type="text"
                placeholder="$ 000"
                className="input input-bordered w-full h-14 bg-slate-100"
              />
              <h4 className="font-semibold pt-3 pb-1 text-xs">Category</h4>
              <select className="w-full max-w-xs select input-bordered bg-slate-100 text-xs">
                <option disabled selected>
                  Choose
                </option>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
                <option value="rent">Rent</option>
                <option value="other">Other</option>
              </select>
              <div className="flex gap-4 mt-3 w-72">
                <input
                  type="date"
                  className="w-[136px] max-w-xs input input-bordered bg-slate-100 text-xs"
                />
                <input
                  type="time"
                  className="w-[135px] max-w-xs input input-bordered bg-slate-100 text-xs"
                />
              </div>
              <button className="bg-blue-600 text-white h-8  w-72 border rounded-full mt-4 mb-5 text-sm">
                Add Record{" "}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RecordModal;
