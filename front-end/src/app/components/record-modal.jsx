import React, { useState } from "react";
import { PiPlusThin } from "react-icons/pi";
import { apiUrl } from "../utils/util";
import { headers } from "next/headers";

const RecordModal = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("INC");
  const [recordFormData, setRecordFormData] = useState({
    name: "",
    amount: 0,
    cid: "",
    uid: "",
    transaction_type: "EXP",
    description: "",
  });

  const handleChangeForm = (e) => {
    setRecordFormData({ ...recordFormData, [e.target.name]: e.target.value });
  };


  const addRecordData = async () =>{
    const newData = {
      ...recordFormData,
        transaction_type: activeTab,
    }

    console.log ("new data", newData);
    const token = localStorage.getItem("token")
    try {
       const res = await axios.post( `${apiUrl}/records`, newData,{
        headers: {
          Authorization: `Bearer ${token}`
         }
       });
    
       if(res.status ===201) {
        toast.success("Record amjilttai nemegdlee")
       }
    } catch (error) {
      toast.error("Record nemeh uyd aldaa garlaa")
      
  } 

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
            <button className="btn btn-sm btn-circle absolute right-2 top-2 py-4">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-sm pb-5">Add Records</h3>
          <div className="w-60 h-60 flex flex-col px-5">
            <div className="flex join">
              <button
                className={`join-item btn border rounded-full  w-36 ${
                  activeTab === "EXP"
                    ? "bg-blue-700 text-white"
                    : "bg-slate-200 text-black"
                }`}
                onClick={() => setActiveTab("EXP")}
              >
                Expense
              </button>

              <button
                className={`join-item btn border rounded-full w-36 ${
                  activeTab === "INC"
                    ? "bg-lime-600 text-white"
                    : "bg-slate-200 text-black"
                }`}
                onClick={() => setActiveTab("INC")}
              >
                Income
              </button>
            </div>
            <div>
              <div className="flex flex-col mt-5 w-72">
                <p className="font-semibold text-xs mb-1">Amount</p>
                <input
                  type="text"
                  name="amount"
                  placeholder="$ 000"
                  className="input input-bordered w-full h-14 bg-slate-100"
                />
                <h4 className="font-semibold pt-3 pb-1 text-xs">Category</h4>
                <select
                  className="w-full max-w-xs select input-bordered bg-slate-100 text-xs"
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
                <button
                  className={` h-8  w-72 border rounded-full mt-4 mb-5 text-sm  ${
                    activeTab === "EXP" ? "bg-blue-700" : "bg-lime-600"
                  } text-white w-full`}
                  onClick={addRecordData}
                >
                  Add Record{" "}
                </button>
              </div>
              {/* <LeftSide /> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
}

export default RecordModal;
