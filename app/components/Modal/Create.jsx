import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import CheckCircle from "@/app/assets/check_circle.svg";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";

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
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="contactName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="test title"
                label="Contact name"
                error={errors.contactName}
              />
            )}
          />
          <div className="flex justify-between mt-5">
            <div>
              <Controller
                name="areaCode"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="test title"
                    label="Area code"
                    customClassName="w-[150px]"
                    error={errors.areaCode}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="test title"
                    label="Phone number"
                    error={errors.phoneNumber}
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="test title"
                  label="Email"
                  error={errors.email}
                />
              )}
            />
          </div>
          <div className="mt-4">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="test title"
                  label="Address"
                  error={errors.address}
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
        {/* <Input
          placeholder="test title"
          label="Contact name"
          name="contact_name"
        />
        <div className="flex justify-between mt-5">
          <div>
            <Input
              placeholder="test title"
              label="Area code"
              name="area_code"
              customClassName="w-[150px]"
            />
          </div>
          <div>
            <Input
              placeholder="test title"
              label="Phone number"
              name="phone_number"
            />
          </div>
        </div>

        <div className="mt-4">
          <Input placeholder="test title" label="Email" name="email" />
        </div>
        <div className="mt-4">
          <Input placeholder="test title" label="Address" name="address" />
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
          />
        </div> */}
      </Modal>
    </div>
  );
};

export default CreateModal;
