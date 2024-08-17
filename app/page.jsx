"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "./msal/ProtectRoute";
import Table from "./components/Table/Table";
import axios from "axios";

const Home = () => {
  const [dataTable, setDataTable] = useState([]);

  // const getApi = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     setDataTable(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getApi();
  //   console.log(dataTable);
  // }, []);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setDataTable(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getApi();
    console.log(dataTable);
  }, []);

  const columns = [
    {
      Header: "ID",
      accessorKey: "id",
    },
    {
      Header: "Contact Name",
      accessorKey: "title",
    },
    {
      Header: "Phone Number",
      accessorKey: "body",
    },
    // {
    //   Header: "Action",
    // },
  ];

  // useEffect(() => {
  //   console.log(dataTable); // This effect runs whenever dataTable changes
  // }, [dataTable]);

  return (
    <ProtectedRoute>
      <main>
        {/* {dataTable && dataTable.length} */}
        {/* <div>hahahahaha</div> */}
        <Table columns={columns} data={dataTable} />
      </main>
    </ProtectedRoute>
  );
};

export default Home;
