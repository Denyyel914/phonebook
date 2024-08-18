import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import saveIcon from "@/app/assets/save.svg";
import deleteIcon from "@/app/assets/delete.svg";

const DeleteModal = ({ isModalOpen, closeModal, editData }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Delete Contact"
        titleCustomClass={"text-2xl"}
        size="537px"
      >
        <div className="w-[35vw]">
          <p>Are you sure you want to delete this contact?</p>
          <div className="flex justify-end mt-7 pb-4">
            <Button
              label="Cancel"
              customClassName="mr-2 w-[80px] h-[40px] text-[#0077D4]"
              onClick={closeModal}
            />
            <Button
              label="Delete"
              customClassName="mr-2 w-[90px] h-[40px] bg-[#D4000D] text-white"
              onClick={closeModal}
              iconType="leading"
              icon={<Image src={deleteIcon} alt="Delete Icon" />}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
