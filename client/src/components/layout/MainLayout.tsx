import React from "react";
import DashboardSidebar from "./menu/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Slash } from "lucide-react";
import ModeToggle from "../ui/ModeToggle";

interface MainLayoutProps {
  user: {
    initials: string;
    name: string;
    email: string;
  };
  isAdmin: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ user, isAdmin }) => {
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
      <DashboardSidebar isAdmin={isAdmin} user={user} />
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="flex justify-start items-center px-4 pt-6 bg-transparent z-10">
          <Breadcrumb items={breadcrumbItems} separator={<Slash />} />
          <div className="w-fit ml-auto">
            <ModeToggle />
          </div>
        </header>
        {/* Main Content */}
        <div className="flex-1 px-4 pb-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
