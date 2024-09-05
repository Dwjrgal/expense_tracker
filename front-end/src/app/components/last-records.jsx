import React from "react";
import { FaHome } from "react-icons/fa";

const records = [
  {
    ctg_img:"./img/Home.png" ,
    title: "Lending & Renting",
    date: "3 hours ago",
  },
];

export const LastRecords = () => {
  return (
    <section className="bg-white rounded pl-5 pt-3">
      <h3 className="font-semibold pb-3">Last Records</h3>
      {records.map((records) => (
        <div className="flex items-center border-solid border-t-2 border-gray gap-2 pt-4">
          <img className="h-8"src={records.ctg_img}></img>
          <div className="flex flex-col text-xs">
            <h4 className="font-semibold">{records.title}</h4>
            <p className="text-xs text-gray-500">{records.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
