import React from "react";

const SignUp = () => {
  return (
    <>
      <section className="flex justify-between">
        <section className="mx-auto my-44">
          <div className="mb-3 flex flex-col items-center gap-1">
            <img src="./img/GELD.png" alt="" className="h-5 mb-3" />
            <h4 className="font-bold text-center">Create Geld account</h4>
            <p className="text-[9px] text-gray-600 text-center mb-6">
              Sign up below to create your Wallet account
            </p>
            <div className="flex flex-col gap-2">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="border rounded h-6 text-[10px] pl-2 w-52 bg-slate-100"
                  placeholder="Name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="border rounded h-6 text-[10px] pl-2 w-52 bg-slate-100"
                  placeholder=" Email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="border rounded h-6 text-[10px] pl-2 w-52 bg-slate-100"
                  placeholder="Password"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="border rounded h-6 text-[10px] pl-2 w-52 bg-slate-100"
                  placeholder="Re-password"
                />
              </label>
            </div>
            <button className="bg-blue-600 rounded-xl text-white text-xs mt-2 h-7 w-52">
              Sign up
            </button>
            <div className="flex gap-2 justify-center mt-2">
              <span className="text-center text-[10px]">
                Don't have account?
              </span>
              <a href="Sign up" className="text-[10px] text-blue-500">
                Log in
              </a>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 w-[600px] h-[1024px]"></section>
      </section>
    </>
  );
};

export default SignUp;
