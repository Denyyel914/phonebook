import React from "react";
import Image from "next/image";
import Humburger from "../../assets/humburger.svg";
import Button from "@/app/components/Button/Button";
import AddIcon from "@/app/assets/AddIcon.svg";
// import AddIcon from "../../assets/AddIcon.svg"

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
          <Button
            label="Create Contact"
            style="Primary"
            customClassName="w-full h-[40px]"
            iconType="leading"
            icon={<Image src={AddIcon} alt="Vercel Logo" />}
            onClick={console.log("hahaha")}
          />
          <div className=" ml-3">dropdown</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
