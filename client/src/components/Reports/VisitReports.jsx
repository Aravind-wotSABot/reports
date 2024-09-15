// import Sidebar from "../Sidebar";

// export const VisitReports = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       VisitReports
//     </div>
//   );
// };



import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

const VisitReports = () => {
  const [rowData, setRowData] = useState([
    {
      report_name: "Visit by Lead, Contact and Prospects",
      description: "MoM visits by Lead/Contact/Prospects",
    },
    {
      report_name: "Top Referrers",
      description: "Referrers that contribute the most",
    },
    {
      report_name: "New Leads generated this month",
      description: "Leads created by visitor tracking this month",
    },
    {
      report_name: "Leads visits this month",
      description: "Leads who have visited your website this month",
    },
    {
      report_name: "Frequently Visited Pages",
      description: "Most Visited Page by Visitors",
    },
    {
      report_name: "Customer visit across Region",
      description: "Contacts who have done business with you by region",
    },
    {
      report_name: "Chats Attended this Month",
      description: "Number of chats attended by your team this month",
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
            <h1 className="text-3xl font-bold mt-8">Visit Reports</h1>
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

export default VisitReports;
