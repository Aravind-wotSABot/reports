
// import Sidebar from '../Sidebar'

// const MeetingReports = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />MeetingReports</div>
//   )
// }

// export default MeetingReports



import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

const MeetingReports = () => {
  const [rowData, setRowData] = useState([
    {
      report_name: "Planned Vs Realized Meetings this month",
      description: "Know how many planned check-ins have been realized in the curent month",
    },
    {
      report_name: "Number of Check-Ins by Salesperson",
      description: "Get number of monthly check-ins for customers completed by each Salesperson",
    },
    {
      report_name: "Number of Check-Ins by Locality",
      description: "Get total number of monthly check-ins for customer by locality",
    },
    {
      report_name: "Check-Ins for Leads",
      description: "Get check-in details for each leads",
    },
    {
      report_name: "Check-Ins for Accounts",
      description: "Get check-in details for each accounts",
    },
    {
      report_name: "Check-Ins by Locality",
      description: "Get check-in details categorized by locality",
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
            <h1 className="text-3xl font-bold mt-8">Meeting Reports</h1>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <SearchBar />
              {/* Create Button */}
              <button className="bg-blue-500 text-xs text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors">
                Create
              </button>
            </div>
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

export default MeetingReports;
