import React from "react";

const Loader = () => {
  return (
    <div className="flex  flex-col  my-60 items-center">
      <img src="./img/GELD.png" alt="" className="h-5 mb-6" />
      <span className="loading loading-spinner loading-lg mb-2"></span>
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
