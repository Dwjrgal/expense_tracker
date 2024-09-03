import Link from "next/link";
import Image from "next/image";
import React, {useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "../utils/util";

const LogIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <section className="flex justify-between bg-white">
      <section className="my-44 mx-auto w-52">
        <div className="flex flex-col gap-4 text-xs">
          <div className="mb-3 flex flex-col items-center gap-1">
            <img src="./img/GELD.png" alt="" className="h-5 mb-3" />
            <h4 className="font-bold text-center text-black">Welcome Back</h4>
            <p className="text-[9px] text-gray-600 text-center">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Email"
              className="border rounded h-7 text-[10px] pl-2 bg-slate-100"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            <input
              type="text"
              placeholder="Password"
              className="border rounded h-7 text-[10px] pl-2 bg-slate-100"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            className="bg-blue-600 rounded-xl text-white h-7"
            onClick={logIn}
          >
            Log in
          </button>
          <div className="flex gap-2 justify-center mt-2">
            <span className="text-center text-[10px] text-black">
              Don't have account?
            </span>
            <a href="Sign up" className="text-[10px] text-blue-500">
              <Link href="/signup">Sign up</Link>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 w-[600px] h-[1024px]"></section>
    </section>
  );
};

export default LogIn;
