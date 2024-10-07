import React from "react";
import DashboardSidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Slash } from "lucide-react";
import ModeToggle from "../ui/ModeToggle"; // Import the ModeToggle component

const MainLayout: React.FC = () => {
  const isAdmin = true;
  const location = useLocation();

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Function to generate breadcrumb items based on the current path
  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const items = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = capitalizeFirstLetter(value);
      return {
        label: label,
        href: to,
        current: index === pathnames.length - 1,
      };
    });

    // Always include 'Home' as the first breadcrumb item
    return [
      { label: "Home", href: "/", current: pathnames.length === 0 },
      ...items,
    ];
  };

  const breadcrumbItems = generateBreadcrumbItems();

  return (
    <div className="flex h-screen">
      <DashboardSidebar isAdmin={isAdmin} />
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="flex justify-start mt-2 items-center p-4 bg-transparent fixed top-0 right-0 left-[280px] z-10">
          <Breadcrumb items={breadcrumbItems} separator={<Slash />} />
          <div className="w-fit ml-auto">
            {" "}
            <ModeToggle />
          </div>
        </header>
        {/* Spacer to prevent content from being hidden behind the fixed header */}
        <div className="h-10"></div>
        {/* Main Content */}
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;