import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";

const CreateModal = ({ isModalOpen, handleModal, closeModal }) => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const [test, setTest] = useState("");
  const [form, setForm] = useState({
    contact_name: "",
    area_code: "",
    phone_number: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Contact"
        titleCustomClass={"text-2xl"}
        size="xl"
        width="35vw"
      >
        <Input
          placeholder="test title"
          label="Contact name"
          value={form.contact_name}
          onChange={handleChange}
          name="contact_name"
        />
        <div className="flex justify-between mt-5">
          <div>
            <Input
              placeholder="test title"
              label="Area code"
              name="area_code"
              value={form.area_code}
              onChange={handleChange}
              customClassName="w-[150px]"
            />
          </div>
          <div>
            <Input
              placeholder="test title"
              label="Phone number"
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-4">
          <Input
            placeholder="test title"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <Input
            placeholder="test title"
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
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
            onClick={handleSubmit}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateModal;
