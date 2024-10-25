import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";
import { showToast } from "../Toastify/Toastify";

const CreateModal = ({ isModalOpen, handleModal, closeModal }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contact_name: "",
      area_code: "",
      phone_number: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    const response = await fetch("/api/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Response:", result);

    showToast("This is a success message!", "success");
    reset();
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Contact"
        titleCustomClass={"text-2xl"}
        size="537px"
      >
        <div className="w-[35vw]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="contact_name"
              control={control}
              rules={{ required: "Contact name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="test title"
                  label="Contact name"
                  errorMessage={errors.contactName?.message}
                />
              )}
            />
            <div className="flex justify-between mt-5">
              <div>
                <Controller
                  name="area_code"
                  control={control}
                  rules={{ required: "Area code is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Area code"
                      label="Area code"
                      customClassName="w-[150px]"
                      errorMessage={errors.area_code?.message}
                    />
                  )}
                />
              </div>
              <div className="flex-grow ml-4">
                <Controller
                  name="phone_number"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Phone number"
                      label="Phone number"
                      customClassName="w-full"
                      errorMessage={errors.phone_number?.message}
                    />
                  )}
                />
              </div>
            </div>

            <div className="mt-4">
              <Controller
                name="email"
                control={control}
                rules={{ required: "Contact name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="test title"
                    label="Email"
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </div>
            <div className="mt-4">
              <Controller
                name="address"
                control={control}
                rules={{ required: "Contact name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="test title"
                    label="Address"
                    errorMessage={errors.address?.message}
                  />
                )}
              />
            </div>
            <div className="flex justify-end mt-7 pb-4">
              <Button
                label="Cancel"
                customClassName="mr-2 w-[80px] h-[40px] text-[#0077D4]"
                onClick={closeModal}
              />
              <Button
                label="Create contact"
                style="Primary"
                customClassName="w-36 h-[40px]"
                iconType="leading"
                icon={<Image src={CheckCircle} alt="Check Circle" />}
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateModal;
