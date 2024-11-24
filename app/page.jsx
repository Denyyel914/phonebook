"use client";

import { useEffect, useState, useCallback } from "react";
import ProtectedRoute from "./msal/ProtectRoute";
import Table from "./components/Table/Table";
import axios from "axios";
import EditModal from "./components/Modal/EditModal";
import DeleteModal from "./components/Modal/DeleteModal";
import tableData from "@/app/data/MOCK_DATA.json";
import ToastNotification from "./components/Toastify/Toastify";
import debounce from "lodash/debounce";
import { showToast } from "./components/Toastify/Toastify";

const Home = () => {
  const [dataTable, setDataTable] = useState(tableData);
  const [contact, setContact] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [editData, setEditData] = useState([]);
  const [deleteData, setDeleteData] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     await axios
  //       .get("/api/read/")
  //       .then((response) => {
  //         setContact(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   getData();
  // }, [contact]);

  useEffect(() => {
    const getData = async () => {
      // Fetch data only if it's empty
      if (contact.length === 0) {
        try {
          const response = await axios.get("/api/read/");
          setContact(response.data); // Update the contact state
        } catch (err) {
          console.log(err);
        }
      }
    };

    getData();
  }, [contact]);

  const refreshData = async () => {
    try {
      const response = await axios.get("/api/read/");
      setContact(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Debounced search function to limit API calls
  const handleSearch = useCallback(
    debounce(async (searchValue) => {
      try {
        const response = await axios.get(`/api/search?query=${searchValue}`);
        setSearchData(response.data); // Pass results back to parent
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 300),
    []
  );

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
        // refreshData();
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
        {/* {contact.length} */}
        <Table
          columns={columns}
          data={searchData || contact} // use search data if available, otherwise fallback to full data
          onEdit={handleEdit}
          onDelete={handleDeleteModal}
          onSearch={handleSearch} // pass handleSearch to Table component
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
