"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "./msal/ProtectRoute";
import Table from "./components/Table/Table";
import axios from "axios";
import EditModal from "./components/Modal/EditModal";
import DeleteModal from "./components/Modal/DeleteModal";
import tableData from "@/app/data/MOCK_DATA.json";

const Home = () => {
  // const [dataTable, setDataTable] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [editData, setEditData] = useState([]);

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
      Header: "Area Code",
      accessorKey: "area_code",
    },
    {
      Header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      Header: "Email",
      accessorKey: "email",
    },
    {
      Header: "Address",
      accessorKey: "address",
    },
    // {
    //   Header: "Action",
    // },
  ];

  const handleEdit = (rowData) => {
    console.log(rowData);
    setEditData(rowData);
    setIsEditModal(true);
  };

  const closeModal = () => setIsEditModal(false);
  const closeDeleteModal = () => setIsDeleteModal(false);
  const handleDelete = (rowData) => {
    console.log(rowData);
    setIsDeleteModal(true);
  };
  return (
    <ProtectedRoute>
      <main>
        <Table
          columns={columns}
          data={tableData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      <EditModal
        isModalOpen={isEditModal}
        closeModal={closeModal}
        editData={editData}
      />
      <DeleteModal isModalOpen={isDeleteModal} closeModal={closeDeleteModal} />
    </ProtectedRoute>
  );
};

export default Home;
