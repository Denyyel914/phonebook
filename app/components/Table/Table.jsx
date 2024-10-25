import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Input from "../Input/Input";
import Pagination from "@/app/components/Pagination/Pagination";
import Image from "next/image";
import editIcon from "@/app/assets/table/edit.svg";
import deleteIcon from "@/app/assets/button-delete.svg";

const Table = ({ columns, data, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const dataTable = useMemo(() => data, [data]);
  const table = useReactTable({
    data: dataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
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
      <table className="mt-5 w-full">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="py-3 px-4  text-left p-2 border-b  text-black-700 font-medium text-sm text-nowrap uppercase"
              >
                {flexRender(
                  header.column.columnDef.Header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 border-b border-[#C3C6CF] text-[#1A1C1E] font-normal text-sm text-clip"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="p-2 border-b border-[#C3C6CF] text-[#1A1C1E] font-normal text-sm  text-clip">
                <div className="flex">
                  <Image
                    src={editIcon}
                    alt="Check Circle"
                    onClick={() => onEdit(row.original)}
                  />
                  <Image
                    src={deleteIcon}
                    alt="Check Circle"
                    onClick={() => onDelete(row.original)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
