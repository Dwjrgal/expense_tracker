import Image from "next/image";
import Link from "next/link";
import { PiPlusThin } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const Header = () => {
  const { user, logOut } = {};

  return (
    <header className="flex items-center max-w-5xl mx-auto justify-between py-4 border-b-[1px]  w-[820px]">
      <div className="flex gap-6 items-center">
        <img src="./img/Header_logo.png" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p className="font-semibold text-sm">Dashboard</p>
        </Link>
        <Link href="/records">
          <p className="text-xs font-normal hover:font-semibold hover:text-sky-600">
            Records
          </p>
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <button className="btn bg-blue-600 text-white  btn-xs text-[10px] font-light rounded-xl flex justify-center gap-1">
          <PiPlusThin className=" text-sm font-bold" />
          Records
        </button>
        <div className="avatar w-8 h-8">
          <div className="w-24 rounded-full">
            {/* <img src={user?.avatarImg} /> */}
            <img src="./img/Profile_img.png" alt="" />
          </div>
        </div>
        <button onClick={logOut}>
          <RiLogoutCircleRLine className="text-xs hover:text-red-500" />
        </button>
      </div>
    </header>
  );
};
