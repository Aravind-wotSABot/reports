// import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

// const Sidebar = () => {
//   const sections = [
//     {
//       items: [
//         { name: "Lead Reports", path: "/lead-reports" },
//         {
//           name: "Account and Contact Reports",
//           path: "/account-and-contact-reports",
//         },
//         { name: "Deal Reports", path: "/deal-reports" },
//         { name: "Quote Reports", path: "/quote-reports" },
//         { name: "Sales Order Reports", path: "/sales-order-reports" },
//         { name: "Sales Metrics Reports", path: "/sales-metrics-reports" },
//         { name: "Meeting Reports", path: "/meeting-reports" },
//         { name: "Invoice Reports", path: "/invoice-reports" },
//         { name: "Visit Reports", path: "/visit-reports" },
//       ],
//     },
//   ];

//   return (
//     <nav className="z-10">
//       <div className="flex flex-col h-full bg-white shadow-sm text-neutral-700 border-r border-gray-300 w-80">
//         <h2 className=" m-6 text-2xl font-bold">Folders</h2>
//         <div className="ml-6">
//           <SearchBar />
//         </div>
//         <div></div>
//         <div className="">
//           <div className="border border-gray-200 mt-8 mx-8" />
//           {sections.map((section, sectionIndex) => (
//             <div
//               key={sectionIndex}
//               className="flex flex-col justify-between m-4 mt-6 gap-2"
//             >
//               {section.items.map((item, itemIndex) => (
//                 <NavLink
//                   key={itemIndex}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `flex px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-neutral-200 text-neutral-700  ${
//                       isActive ? "bg-neutral-200 text-neutral-700 hover:bg-neutral-300" : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;


import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; // Importing a search icon from react-icons

const Sidebar = () => {
  const sections = [
    {
      items: [
        { name: "Lead Reports", path: "/lead-reports" },
        {
          name: "Accounts and Contact Reports",
          path: "/account-and-contact-reports",
        },
        { name: "Deal Reports", path: "/deal-reports" },
        { name: "Quote Reports", path: "/quote-reports" },
        { name: "Sales Order Reports", path: "/sales-order-reports" },
        { name: "Sales Metrics Reports", path: "/sales-metrics-reports" },
        { name: "Meeting Reports", path: "/meeting-reports" },
        { name: "Invoice Reports", path: "/invoice-reports" },
        { name: "Visit Report", path: "/visit-reports" },
      ],
    },
  ];

  return (
    <nav className="z-10 bg-gray-100">
      {/* Adjusted Sidebar Width */}
      <div className="flex flex-col h-full bg-gray-100  text-neutral-700  w-80">
        {/* Title */}
        <h2 className="m-6 text-3xl ml-16 font-bold">Reports</h2>

        {/* Search Bar */}
        <div className="ml-6 mr-6 mb-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <AiOutlineSearch className="absolute right-3 top-2 text-gray-400" />
        </div>

        {/* Card-like Navigation Links */}
        <div className="mt-4 flex-1 overflow-y-auto px-6">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-lg shadow-md p-4 mb-4"
            >
              {/* Map over items to create NavLinks */}
              {section.items.map((item, itemIndex) => (
                <NavLink
                  key={itemIndex}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 mb-1 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-gray-100 ${isActive
                      ? "bg-gray-200 text-neutral-800 border-l-4 border-blue-500"
                      : "text-neutral-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
