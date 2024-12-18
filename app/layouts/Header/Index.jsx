import React, { useState } from "react";
import Image from "next/image";
import Humburger from "../../assets/humburger.svg";
import Button from "@/app/components/Button/Button";
import AddIcon from "@/app/assets/AddIcon.svg";
import Modal from "@/app/components/Modal/Modal";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "@/app/components/Input/Input";
import CreateModal from "@/app/components/Modal/Create";
import { useRouter } from "next/navigation";

const Header = ({ onToggleSidebar }) => {
  const navigate = useRouter();
  const [isModalOpen, isSetModalOpen] = useState(false);

  const handleModal = () => {
    isSetModalOpen(true);
  };

  const closeModal = () => {
    isSetModalOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate.push("/login");
  };

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
          <h1 className="text-xl text-pc-40">Phone book</h1>
        </div>
        <div className="flex justify-center items-center">
          <Button
            label="Create Contact"
            style="Primary"
            customClassName="w-full h-[40px]"
            iconType="leading"
            icon={<Image src={AddIcon} alt="Vercel Logo" />}
            onClick={handleModal}
          />
          <div className="ml-3" onClick={logout}>
            logout
          </div>
          <div className=" ml-3">{isModalOpen}</div>
        </div>
      </nav>

      <CreateModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleModal={handleModal}
      />
    </header>
  );
};

export default Header;
