// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import { useMemo, useState } from "react";
// import Sidebar from "../Sidebar";
// import SearchBar from "../SearchBar";

// const QuoteReportsTable = () => {
//   const [rowData, setRowData] = useState([
//     {
//       report_name: "Quotes by Stage",
//       description: "Quote Based on Stages",
//     },
//     {
//       report_name: "Quotes by Accounts",
//       description: "Quote Based on Accounts",
//     },
//   ]);
//   const [columnDefs, setColumnDefs] = useState([
//     {
//       field: "report_name",
//       headerName: "Report Name",
//       headerCheckboxSelection: true,
//       checkboxSelection: true,
//       flex: 1,

//     },
//     {
//       field: "description",
//       headerName: "Description",
//       flex: 2,
//     },
//   ]);

//   const defaultColDef = useMemo(() => {
//     return {
//       filter: true,
//     };
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />
//       {/* Main Content */}
//       <div className="flex flex-col justify-center w-full m-16">
//         <div className="flex justify-end mb-6">
//           <SearchBar />
//         </div>

//         {/* Table */}

//         <div className="ag-theme-quartz">
//           <AgGridReact
//             rowData={rowData}
//             columnDefs={columnDefs}
//             rowSelection={"multiple"}
//             domLayout="autoHeight"
//             defaultColDef={defaultColDef}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteReportsTable;



import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

const QuoteReportsTable = () => {
  const [rowData, setRowData] = useState([
    {
      report_name: "Quotes by Stage",
      description: "Quote Based on Stages",
    },
    {
      report_name: "Quotes by Accounts",
      description: "Quote Based on Accounts",
    },
  ]);

  const [columnDefs] = useState([
    {
      field: "report_name",
      headerName: "Report Name",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      flex: 2,
      cellClass: "text-blue-500 font-bold", // Tailwind CSS classes for blue and bold text
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    };
  }, []);


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-7xl mt-32">
          {/* Header and Search Bar */}
          <div className="flex justify-between items-center mb-6 pl-16 mr-16">
            <h1 className="text-3xl font-bold mt-8">Quote Reports</h1>
            <SearchBar />
          </div>

          {/* Reports Table */}
          <div className="ag-theme-quartz pl-16 mr-16 ">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection={"single"}
              domLayout="autoHeight"
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteReportsTable;
