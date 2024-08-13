import { useState } from "react";
import Input from "../Input/Input";
import Pagination from "@/app/components/Pagination/Pagination";

const Table = () => {
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      table
      <div className="flex justify-between">
        <Input
          placeholder="Search Contacts"
          value={search}
          onChange={handleChange}
          //   label="Contact name"
          //   errorMessage={errors.contactName?.message}
        />
        <div className="flex">
          {/* <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div> */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Table;
