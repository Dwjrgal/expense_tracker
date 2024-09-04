import Image from "next/image";
import Link from "next/link";
import { PiPlusThin } from "react-icons/pi";

export const Header = ({ user, logOut }) => {
  return (
    <header className="flex items-center max-w-[1200px] px-10 justify-between py-4 border-b-[1px]">
      <div className="flex gap-6 items-center">
        <img src="./img/Header_logo.png" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p className="font-semibold text-sm">Dashboard</p>
        </Link>
        <Link href="/records">
          <p className="text-xs font-normal">Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-blue-600 text-white btn-sm text-xs font-extralight rounded-full">
          <PiPlusThin className=" text-lg font-extralight" />
          Records
        </button>
        <div className="avatar w-10 h-10">
          <div className="w-24 rounded-full">
            {/* <img src={user?.avatarImg} /> */}
            <img src="./img/Profile_img.png" alt="" />
          </div>
        </div>
        <button className="btn btn-xs text-xs bg-inherit" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
