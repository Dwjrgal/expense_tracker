import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <section className="flex justify-between">
        <section className="mx-auto my-44">
          <div className="mb-3 flex flex-col items-center gap-1">
            <img src="./img/GELD.png" alt="" className="h-5 mb-3" />
            <h4 className="font-bold text-center text-black">
              Create Geld account
            </h4>
            <p className="text-[9px] text-gray-600 text-center mb-6">
              Sign up below to create your Wallet account
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="border rounded h-7  w-52 text-[10px] pl-2 bg-slate-100"
                placeholder="Name"
              />
              <input
                type="text"
                className="border rounded h-7 text-[10px] pl-2  bg-slate-100"
                placeholder=" Email"
              />
              <input
                type="text"
                className="border rounded h-7 text-[10px] pl-2  bg-slate-100"
                placeholder="Password"
              />
              <input
                type="text"
                className="border rounded h-7 text-[10px] pl-2 bg-slate-100"
                placeholder="Re-password"
              />
            </div>
            <button className="bg-blue-600 rounded-xl text-white text-xs mt-2 h-7 w-52">
              Sign up
            </button>
            <div className="flex gap-2 justify-center mt-2">
              <span className="text-center text-[10px] text-black">
                Don't have account?
              </span>
              <a href="Sign up" className="text-[10px] text-blue-500">
                <Link href="/">Log in</Link>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 w-[600px] h-[900px]"></section>
      </section>
    </>
  );
};

export default SignUp;
