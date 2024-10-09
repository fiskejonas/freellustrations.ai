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
    <div className="flex h-screen w-[280px] flex-col p-4 bg-transparent">
      <div className="flex flex-col w-full border h-full bg-white rounded-lg shadow-lg dark:bg-[#292929]">
        <div className="flex w-full py-2 flex-col">
          <div className="m-4 w-fit h-full rounded-lg flex">
            <img
              className="invert dark:invert-0 w-fit h-5"
              src="/freellustrations_logo.svg"
              alt="Logo"
            />
          </div>
          <div className="line border-b dark:border-foreground dark:opacity-30 w-full"></div>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarMenu.map((item) => (
              <SidebarMenuItem key={item.path} item={item} isAdmin={isAdmin} />
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 usersettings">
          <UserSettingsDialog user={user} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
