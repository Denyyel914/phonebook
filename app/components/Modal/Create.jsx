import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "../Input/Input";
const CreateModal = ({ isModalOpen, handleModal, closeModal }) => {
  const [test, setTest] = useState("");
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Contact"
        titleCustomClass={"text-2xl"}
        size="xl"
        width="40vw"
      >
        <Input placeholder="test title" label="test label" value={test} />
        <div className="flex justify-between mt-5">
          <div>
            <Input placeholder="test title" label="test label" value={test} />
          </div>
          <div>
            <Input placeholder="test title" label="test label" value={test} />
          </div>
        </div>

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
