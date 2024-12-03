import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Image from "next/image";
import saveIcon from "@/app/assets/save.svg";
import deleteIcon from "@/app/assets/delete.svg";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";
import { showToast } from "../Toastify/Toastify";
import tableData from "@/app/data/MOCK_DATA.json";
import axios from "axios";

const EditModal = ({
  isModalOpen,
  closeModal,
  editData,
  deleteFunction,
  refreshData,
}) => {
  const [dataTable, setDataTable] = useState(tableData);
  const {
    control,
    handleSubmit,
    watch,
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

  // const formValues = watch();

  // useEffect(() => {
  //   console.log("Form values changed:", formValues);
  //   console.log("Edit data:", editData);
  // }, [formValues, editData]);

  useEffect(() => {
    if (editData) {
      reset({
        id: editData.id,
        contact_name: editData.contact_name || "",
        area_code: editData.area_code || "",
        phone_number: editData.phone_number || "",
        email: editData.email || "",
        address: editData.address || "",
      });
      console.log("Edit data updated:", editData);
    }
  }, [editData, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`/api/update/${data.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.data);

      // Show success message and close the modal
      showToast("This is a success message!", "success");
      // refreshData();
      reset();
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      showToast("An error occurred. Please try again.", "error");
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Contact"
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
                  errorMessage={errors.contact_name?.message}
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
            <div className="flex justify-between mt-7 pb-4 ">
              <div>
                <Button
                  label="Delete"
                  type="button"
                  customClassName="mr-2 w-[90px] h-[40px] bg-[#D4000D] text-white"
                  onClick={() => deleteFunction(editData)}
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
