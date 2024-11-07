"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "./msal/ProtectRoute";
import Table from "./components/Table/Table";
import axios from "axios";
import EditModal from "./components/Modal/EditModal";
import DeleteModal from "./components/Modal/DeleteModal";
import tableData from "@/app/data/MOCK_DATA.json";
import ToastNotification from "./components/Toastify/Toastify";
import { showToast } from "./components/Toastify/Toastify";

const Home = () => {
  const [dataTable, setDataTable] = useState(tableData);
  const [contact, setContact] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [editData, setEditData] = useState([]);
  const [deleteData, setDeleteData] = useState();

  // useEffect(() => {
  //   const getApi = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       setDataTable(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getApi();
  //   console.log(dataTable);
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("/api/read/");
  //       setContact(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/api/read/")
        .then((response) => {
          setContact(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  const refreshData = async () => {
    try {
      const response = await axios.get("/api/read/");
      setContact(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      Header: "ID",
      accessorKey: "id",
    },
    {
      Header: "Contact Name",
      accessorKey: "contact_name",
    },

    {
      Header: "Phone Number",
      accessorKey: "phone_number",
    },
    // {
    //   Header: "Action",
    //   accessorKey: "action",
    // },
  ];

  const handleEdit = (rowData) => {
    setEditData(rowData);
    setIsEditModal(true);
  };

  const closeModal = () => setIsEditModal(false);
  const closeDeleteModal = () => setIsDeleteModal(false);

  const handleDeleteModal = (rowData) => {
    setIsDeleteModal(true);
    setDeleteData(rowData);
    console.log(rowData, "test");
  };

  // const deleteConfirmation = () => {
  //   if (deleteData) {
  //     const updatedData = tableData.filter((item) => item.id !== deleteData.id);
  //     setDataTable(updatedData);
  //   }
  //   setIsDeleteModal(false);
  //   showToast("Data deleted!", "info", {
  //     theme: "dark",
  //     icon: false,
  //   });
  // };

  const deleteConfirmation = async () => {
    if (deleteData) {
      try {
        await axios.delete(`/api/delete/${deleteData.id}`);
        const updatedContacts = contact.filter(
          (item) => item.id !== deleteData.id
        );
        setContact(updatedContacts);
        setIsDeleteModal(false);
        showToast("Data deleted successfully!", "info", {
          theme: "dark",
          icon: false,
        });
        refreshData();
      } catch (error) {
        console.error("Error deleting contact:", error);
        showToast("Failed to delete data", "error", {
          theme: "dark",
          icon: false,
        });
      }
    }
  };

  const handleDeleteFromEditModal = (contact) => {
    console.log(contact);

    setDeleteData(contact);
    setIsDeleteModal(true);
    // setIsEditModal(false);
  };
  return (
    <ProtectedRoute>
      <main>
        <ToastNotification />
        {contact.length}
        <Table
          columns={columns}
          data={contact}
          onEdit={handleEdit}
          onDelete={handleDeleteModal}
        />
      </main>
      <EditModal
        isModalOpen={isEditModal}
        refreshData={refreshData}
        closeModal={closeModal}
        editData={editData}
        deleteFunction={handleDeleteFromEditModal}
      />
      <DeleteModal
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        deleteConfirmation={deleteConfirmation}
      />
    </ProtectedRoute>
  );
};

export default Home;
