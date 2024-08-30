import React from "react";

const Login = () => {
  return (
    <section className="flex justify-center my-44">
      <div className="flex flex-col gap-4 text-xs">
        <div className="mb-3">
          <h4 className="font-bold text-center">Welcome Back</h4>
          <p className="text-[9px] text-gray-600 text-center">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Email"
            className="border rounded h-6 text-[10px] pl-2 w-60"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded h-6 text-[10px] pl-2"
          />
        </div>
        <button className="bg-blue-600 rounded-sm text-white h-6">
          Log in
        </button>
        <div className="flex gap-2 justify-center mt-2">
          <span className="text-center text-[10px]">Don't have account?</span>
          <a href="Sign up" className="text-[10px] text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
