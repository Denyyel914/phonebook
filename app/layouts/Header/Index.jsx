import React, { useState } from "react";
import Image from "next/image";
import Humburger from "../../assets/humburger.svg";
import Button from "@/app/components/Button/Button";
import AddIcon from "@/app/assets/AddIcon.svg";
import Modal from "@/app/components/Modal/Modal";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "@/app/components/Input/Input";
import CreateModal from "@/app/components/Modal/Create";

const Header = ({ onToggleSidebar }) => {
  const [isModalOpen, isSetModalOpen] = useState(false);

  const handleModal = () => {
    isSetModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    isSetModalOpen(false);
  };

  // const handleChange(e) {
  //   e.
  // }
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
            onClick={handleModal}
          />
          <div className=" ml-3">{isModalOpen}</div>
        </div>
      </nav>

      {/* <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="sample title"
        titleCustomClass={"text-2xl"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum
          elit et lacinia ornare. Nam ac nulla posuere, cursus risus a,
        </p>

        <div className="flex justify-end mt-7 pb-4">
          <Button
            label="Cancel"
            customClassName="mr-2 w-[80px] h-[40px] text-[#0077D4]"
            // iconType="leading"
            // icon={<Image src={AddIcon} alt="Vercel Logo" />}
            onClick={closeModal}
          />
          <Button
            label="Create contact"
            style="Primary"
            customClassName="w-36 h-[40px]"
            iconType="leading"
            icon={<Image src={CheckCircle} alt="Vercel Logo" />}
            onClick={handleModal}
          />
        </div>
      </Modal> */}
      <CreateModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleModal={handleModal}
      />
    </header>
  );
};

export default Header;
