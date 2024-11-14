"use client";
import { useContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";
import { DashboardContext } from "../context/dashboard_context";
import { PiPlusThin } from "react-icons/pi";
import { UserContext } from "../context/user-context";

const RecordModal = ({ children }) => {
  const { categories } = useContext(DashboardContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <dialog open={isOpen} className="modal">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box max-w-[800px]">
            <button
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold">Add Record</h3>
            <div className="divider"></div>
            <div className="flex gap-12">
              <RightSide categories={categories} />
            </div>
          </div>
        </div>
      </dialog>
      <button
        className=" w-[150px] h-5 bg-blue-600 text-white rounded-xl  flex justify-center items-center gap-1 text-xs"
        onClick={() => setIsOpen(true)}
      >
        <PiPlusThin className="text-white text-lg" />
        Add
      </button>
      <dialog open={isOpen} className="modal">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box max-w-[800px]">
            <button
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold">Add Record</h3>
            <div className="divider"></div>
            <div className="flex gap-12">
              <RightSide categories={categories} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export const RightSide = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("INC");
  const { user } = useContext(UserContext);

  const [recordFormData, setRecordFormData] = useState({
    uid: "e62b83f2-2eca-4f53-89df-f12cb268db6a",
    cid: "",
    name: "",
    amount: 0,
    transaction_type: "",
    description: "",
  });

  const handleChangeForm = (e) => {
    setRecordFormData({ ...recordFormData, [e.target.name]: e.target.value });
  };

  const addRecordData = async () => {
    const newData = {
      ...recordFormData,
      transaction_type: activeTab,
    };
    console.log("DD", newData);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/records`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Record amjilttai nemegdlee");
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };
  console.log("recordform data", recordFormData);
  return (
    <div className="w-2/5">
      <section className="flex gap-10">
        <main>
          <div className="flex mb-3 bg-gray-200 rounded-full">
            <button
              className={`px-11 py-2 rounded-full transition-colors duration-300 ${
                activeTab === "EXP"
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveTab("EXP")}
            >
              Expense
            </button>
            <button
              className={`px-11 py-2 rounded-full transition-colors duration-300 ${
                activeTab === "INC"
                  ? "bg-lime-600 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveTab("INC")}
            >
              Income
            </button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              onChange={handleChangeForm}
            />
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              className="input input-bordered"
              onChange={handleChangeForm}
            />
            <div className="flex flex-col">
              <label>Category</label>
              <select
                className="select select-bordered"
                name="cid"
                onChange={handleChangeForm}
              >
                <option disabled selected>
                  Choose
                </option>
                {categories?.map((c) => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col">
                <label>Date</label>
                <input type="date" className="input input-bordered" />
              </div>
              <div className="flex flex-col">
                <label>Time</label>
                <input type="time" className="input input-bordered" />
              </div>
            </div>
          </div>
        </main>
        <div className="flex flex-col w-3/5 gap-3">
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            className="textarea textarea-bordered w-72 h-60"
            placeholder="Write here"
            onChange={handleChangeForm}
          ></textarea>
        </div>
      </section>
      <div className="mt-3">
        <button
          className={`btn ${
            activeTab === "EXP" ? "bg-blue-700" : "bg-lime-600"
          } text-white w-full`}
          onClick={addRecordData}
        >
          Add Record
        </button>
      </div>
    </div>
  );
};

export default RecordModal;
