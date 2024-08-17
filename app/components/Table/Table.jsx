import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Input from "../Input/Input";
import Pagination from "@/app/components/Pagination/Pagination";

const Table = ({ columns, data }) => {
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
      <table className="mt-5">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
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
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
