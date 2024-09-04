import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import saveIcon from "@/app/assets/save.svg";
import deleteIcon from "@/app/assets/delete.svg";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";
import tableData from "@/app/data/MOCK_DATA.json";

const EditModal = ({ isModalOpen, closeModal, editData }) => {
  const [dataTable, setDataTable] = useState(tableData);
  const {
    control,
    handleSubmit,
    watch,
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

  // const formValues = watch();

  // useEffect(() => {
  //   console.log("Form values changed:", formValues);
  //   console.log("Edit data:", editData);
  // }, [formValues, editData]);

  useEffect(() => {
    if (editData) {
      reset({
        id: editData.id,
        contactName: editData.contact_name || "",
        areaCode: editData.area_code || "",
        phoneNumber: editData.phone_number || "",
        email: editData.email || "",
        address: editData.address || "",
      });
      console.log("Edit data updated:", editData);
    }
  }, [editData, reset]);

  const onDelete = () => {
    console.log(editData);
    console.log(dataTable);
    // const updatedData = tableData.filter((item) => item.id !== deleteData.id);
  };
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
            <div className="flex justify-between mt-7 pb-4 ">
              <div>
                <Button
                  label="Delete"
                  customClassName="mr-2 w-[90px] h-[40px] bg-[#D4000D] text-white"
                  onClick={onDelete}
                  iconType="leading"
                  icon={<Image src={deleteIcon} alt="Check Circle" />}
                />
              </div>
              <div className="flex ">
                <Button
                  label="Cancel"
                  customClassName="mr-2 w-[80px] h-[40px] text-[#0077D4]"
                  onClick={closeModal}
                />
                <Button
                  label="Save changes"
                  style="Primary"
                  customClassName="w-36 h-[40px]"
                  iconType="leading"
                  icon={<Image src={saveIcon} alt="Check Circle" />}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
