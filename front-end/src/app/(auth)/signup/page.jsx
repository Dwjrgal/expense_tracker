"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiUrl } from "@/app/utils/util";

const SignUp = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  // const [image, setImage] = useState(null);

  // const handleImageUpload = async () => {
  //   if (!image) return;
  //   const formData = new FormData();
  //   formData.append("file", image);
  //   formData.append("upload_preset", "byurziwm");

  //   try {
  //     const response = await axios.post(
  //       `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
  //       formData
  //     );
  //     return response.data.secure_url;
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  const signUp = async () => {
    // const imageUrl = await handleImageUpload();
    // if (!imageUrl) return;

    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  return (
    <>
      <section className="flex justify-between h-svh">
        <section className="mx-auto my-auto flex-1">
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
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                type="text"
                className="border rounded h-7 text-[10px] pl-2  bg-slate-100"
                placeholder=" Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <input
                type="password"
                className="border rounded h-7 text-[10px] pl-2  bg-slate-100"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <input
                type="password"
                className="border rounded h-7 text-[10px] pl-2 bg-slate-100"
                placeholder="Re-password"
                value={userData.repassword}
                onChange={(e) =>
                  setUserData({ ...userData, repassword: e.target.value })
                }
              />
            </div>
            <button
              className="bg-blue-600 rounded-xl text-white text-xs mt-2 h-7 w-52"
              onClick={signUp}
            >
              Sign up
            </button>
            <div className="flex gap-2 justify-center mt-2">
              <span className="text-center text-[10px] text-black">
                Already have account?
              </span>
              <a href="Sign up" className="text-[10px] text-blue-500">
                <Link href="/login">Log in</Link>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 flex-1 w-[50%]"></section>
      </section>
    </>
  );
};

export default SignUp;
