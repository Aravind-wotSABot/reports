import { useMemo, useState } from "react";
import axios from "axios"; // For making API requests
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";

const SalesMetricsReportsReports = () => {
  const [rowData, setRowData] = useState([
    {
      report_name: "Sales Cycle Duration Across Owners",
      description: "Average time taken for Deal won, by Owner Deal",
      filter: { dateCreated: new Date().toISOString().split("T")[0] }, // Example filter for today's leads
    },
    {
      report_name: "Sales Cycle Duration Across Leads Sources",
      description: "Average time taken for Deal to be won, by Lead Source",
      filter: { status: "Open" }, // Example filter for leads by status
    },
    {
      report_name: "Sales Cycle Duration Across Deals Type",
      description: "Average time taken for Deal to be won, by type",
      filter: { source: "Website" }, // Example filter for leads by source
    },
    {
      report_name: "Overall Sales Duration Across Leads Sources",
      description: "Average time taken for Lead to be converted to Deal from Leads Source",
      filter: { owner: "John Doe" }, // Example filter for leads by owner
    },
    {
      report_name: "Overall Sales Duration Across Lead Type",
      description: "Average time taken for Lead to be converted to Deal of different type",
      filter: { industry: "Technology" }, // Example filter for leads by industry
    },
    {
      report_name: "Lead Conversion Count across Owners",
      description: "Total number of Lead converted for the past 6 months, by all owners",
      filter: { isConverted: true }, // Example filter for converted leads
    },
  ]);

  const [columnDefs] = useState([
    {
      field: "report_name",
      headerName: "Report Name",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      flex: 1,
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

  // Function to fetch filtered leads from the backend
  const fetchSalesMetrics = async (filter) => {
    try {
      const queryParams = new URLSearchParams(filter).toString();
      // Replace /api/leads with your actual backend API endpoint
      console.log("Query Params:", queryParams); // Log the query string being sent to the backend
      const response = await axios.get(`http://localhost:3000/salesmetrics?${queryParams}`);
      console.log("Filtered SalesMetrics:", response.data); // For debugging, to view the fetched data
    } catch (error) {
      console.error("Error fetching salesmetrics:", error);
    }
  };

  // Handle row selection to fetch leads based on the selected report
  const handleRowSelection = (event) => {
    const selectedReport = event.api.getSelectedRows()[0]; // Get the first selected row
    if (selectedReport && selectedReport.filter) {
      fetchSalesMetrics(selectedReport.filter); // Fetch leads based on the filter for that report
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="w-full m-16">
        <div className="flex justify-end mb-6">
          <SearchBar />
        </div>

        {/* Reports Table */}
        <div className="ag-theme-quartz mb-6" style={{ height: "200px" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection={"single"}
            domLayout="autoHeight"
            defaultColDef={defaultColDef}
            onSelectionChanged={handleRowSelection} // Handle row selection
          />
        </div>
      </div>
    </div>
  );
};

export default SalesMetricsReportsReports;
