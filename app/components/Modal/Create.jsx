import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import CheckCircle from "@/app/assets/check_circle.svg";
const CreateModal = ({ isModalOpen, handleModal, closeModal }) => {
  return (
    <div>
      <Modal
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
      </Modal>
    </div>
  );
};

export default CreateModal;
