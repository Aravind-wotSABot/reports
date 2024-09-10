import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  const sections = [
    {
      items: [
        { name: "Lead Reports", path: "/lead-reports" },
        {
          name: "Account and Contact Reports",
          path: "/account-and-contact-reports",
        },
        { name: "Deal Reports", path: "/deal-reports" },
        { name: "Quote Reports", path: "/quote-reports" },
        { name: "Sales Order Reports", path: "/sales-order-reports" },
        { name: "Sales Metrics Reports", path: "/sales-metrics-reports" },
        { name: "Meeting Reports", path: "/meeting-reports" },
        { name: "Invoice Reports", path: "/invoice-reports" },
        { name: "Visit Reports", path: "/visit-reports" },
      ],
    },
  ];

  return (
    <nav className="z-10">
      <div className="flex flex-col h-full bg-white shadow-sm text-neutral-700 border-r border-gray-300 w-80">
        <h2 className=" m-6 text-2xl font-bold">Folders</h2>
        <div className="ml-6">
          <SearchBar />
        </div>
        <div></div>
        <div className="">
          <div className="border border-gray-200 mt-8 mx-8" />
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col justify-between m-4 mt-6 gap-2"
            >
              {section.items.map((item, itemIndex) => (
                <NavLink
                  key={itemIndex}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-neutral-200 text-neutral-700  ${
                      isActive ? "bg-neutral-200 text-neutral-700 hover:bg-neutral-300" : ""
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
