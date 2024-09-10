import React from "react";

export const Select = () => {
  return (
    <div>
      <select className="select select-bordered w-full max-w-xs">
        <option>Newest first</option>
        <option>Latest</option>
      </select>
    </div>
  );
};
