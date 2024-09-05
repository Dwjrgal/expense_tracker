import React from "react";
import { FaHome } from "react-icons/fa";

const records = [
  {
    ctg_icon: <FaHome />,
    title: "Lending & Renting",
    date: "3 hours ago",
  },
];

export const LastRecords = () => {
  return (
    <section>
      <h3>Last Records</h3>
      {records.map((records) => (
        <div className="flex items-center">
          <span className="text-blue-600">{records.ctg_icon}</span>
          <div className="flex flex-col text-xs">
            <h4>{records.title}</h4>
            <p>{records.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
