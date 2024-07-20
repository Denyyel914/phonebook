import React from "react";
import Image from "next/image";
import Humburger from "../../assets/humburger.svg";
import Button from "@/app/components/Button/Button";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="border-b border-outline fixed top-0 z-50 bg-white w-full">
      <nav className="w-full mx-auto flex items-center justify-between flex-wrap px-4 py-3">
        <div className="flex justify-center items-center">
          <Image
            src={Humburger}
            alt="Vercel Logo"
            width={24}
            height={24}
            onClick={onToggleSidebar}
          />
          <h1 className="text-xl text-pc-40">Phonebook</h1>
        </div>
        <div className="flex justify-center items-center">
          {/* <button className="text-sm px-2 py-2 cursor-pointer rounded-md hover:opacity-90 focus:outline-none bg-pc-40 text-white w-[100px] h-[40px] ">
            Create contact
          </button> */}
          <Button
            labe={"Create contact"}
            style={"primary"}
            customClassname="w-full h-[40px]"
          />
          <div className=" ml-3">dropdown</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
