// components/table/ExampleTwo.js
import { Icon } from "@iconify/react";
import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useRowSelect,
} from "react-table";
// import GlobalFilter from "./GlobalFilter"; // Assuming you have this component in the same folder

const TradeActionTable = ({ title = "Advanced Table Two", stockData }) => {
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      {
        Header: "Company Logo",
        accessor: "comp_logo_url",
        Cell: ({ cell: { value } }) => (
          <img
            src={value}
            alt="Company Logo"
            width="50"
            height="50"
            className="img-fluid"
          />
        ),
      },
      { Header: "Company Name", accessor: "comp_name" },
      { Header: "Buy Price", accessor: "buy_price" },
      { Header: "Stop Loss Price", accessor: "sl_price" },
      { Header: "Target Price", accessor: "target_price" },
      { Header: "Note", accessor: "note" },
      { Header: "Date", accessor: "date" },
      { Header: "Time", accessor: "time" },
      { Header: "User Type", accessor: "usr_type" },
      { Header: "Status", accessor: "status" },
      { Header: "Result", accessor: "result" },
    ],
    []
  );

  const data = useMemo(() => stockData, [stockData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <input type="checkbox" {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <h4>{title}</h4>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}

      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 shadow-lg rounded-md overflow-hidden"
      >
        <thead className="bg-gray-800 text-white">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                  className="px-6 py-3 text-left tracking-wider"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y">
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className={index % 2 === 0 ? "" : ""}
              >
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
        <div className=" flex items-center space-x-3 rtl:space-x-reverse">
          <select
            className="form-control py-2 w-max"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Page{" "}
            <span>
              {pageIndex + 1} of {pageOptions.length}
            </span>
          </span>
        </div>
        <ul className="flex items-center  space-x-3  rtl:space-x-reverse flex-wrap">
          <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${
                !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <Icon icon="heroicons:chevron-double-left-solid" />
            </button>
          </li>
          <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${
                !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Prev
            </button>
          </li>
          {pageOptions.map((page, pageIdx) => (
            <li key={pageIdx}>
              <button
                href="#"
                aria-current="page"
                className={` ${
                  pageIdx === pageIndex
                    ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                    : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                onClick={() => gotoPage(pageIdx)}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${
                !canNextPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </li>
          <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className={` ${
                !canNextPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Icon icon="heroicons:chevron-double-right-solid" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TradeActionTable;
