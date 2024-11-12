import React from "react";
import SidebarMenuItem from "@/components/ui/SidebarMenuItem";
import { sidebarMenu } from "@/config/sidebarMenu";
import UserSettingsDialog from "@/components/ui/UserSettingsDialog";

interface DashboardSidebarProps {
  isAdmin: boolean;
  user: {
    initials: string;
    name: string;
    email: string;
  };
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isAdmin,
  user,
}) => {
  return (
    <div className="flex h-full w-fit flex-col p-4 bg-transparent">
      <div className="flex flex-col items-center w-fit border h-full bg-white rounded-lg shadow-lg dark:bg-[#292929]">
        <div className="flex w-full p-6 items-center justify-center flex-col">
          <img
            className="dark:invert max-w-full h-auto w-8"
            src="/logo.svg"
            alt="Logo"
          />
        </div>
        <div className="flex w-fit">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarMenu.map((item) => (
              <SidebarMenuItem key={item.path} item={item} isAdmin={isAdmin} />
            ))}
          </nav>
        </div>
        <div className="mt-auto flex flex-col items-center p-4 usersettings">
          <UserSettingsDialog user={user} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
