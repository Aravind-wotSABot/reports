import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteReports from "./components/Reports/QuoteReports";
import AccountAndContactReports from "./components/Reports/AccountAndContactReports";
import DealReports from "./components/Reports/DealReports";
import InvoiceReports from "./components/Reports/InvoiceReports";
import LeadReports from "./components/Reports/LeadReports";
import MeetingReports from "./components/Reports/MeetingReports";
import SalesMetricsReports from "./components/Reports/SalesMetricsReports";
import SalesOrderReports from "./components/Reports/SalesOrderReports";
import { VisitReports } from "./components/Reports/VisitReports";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route
          path="/account-and-contact-reports"
          element={<AccountAndContactReports />}
        />
        <Route path="/deal-reports" element={<DealReports />} />
        <Route path="/invoice-reports" element={<InvoiceReports />} />
        <Route path="/lead-reports" element={<LeadReports />} />
        <Route path="/meeting-reports" element={<MeetingReports />} />
        <Route path="/quote-reports" element={<QuoteReports />} />
        <Route
          path="/sales-metrics-reports"
          element={<SalesMetricsReports />}
        />
        <Route path="/sales-order-reports" element={<SalesOrderReports />} />
        <Route path="/visit-reports" element={<VisitReports />} />
      </Routes>
    </Router>
  );
}

export default App;
