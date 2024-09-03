import React from "react";

const dashBoard = () => {
  return (
    <section className="bg-white">
      <div>
        <img src="./img/Header_logo.png" alt="" className="w-10" />
        <h4>Dashboard</h4>
        <p>Records</p>
      </div>
      <div>
        <button>+ Record</button>
        <img src="./img/Profile_img.png" alt="" />
      </div>
    </section>
  );
};

export default dashBoard;
