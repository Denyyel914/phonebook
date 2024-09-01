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
      contactName: "",
      areaCode: "",
      phoneNumber: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    showToast("This is a success message!", "success");
    reset();
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
              name="contactName"
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
                  name="areaCode"
                  control={control}
                  rules={{ required: "Area code is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Area code"
                      label="Area code"
                      customClassName="w-[150px]"
                      errorMessage={errors.areaCode?.message}
                    />
                  )}
                />
              </div>
              <div className="flex-grow ml-4">
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Phone number"
                      label="Phone number"
                      customClassName="w-full"
                      errorMessage={errors.phoneNumber?.message}
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
