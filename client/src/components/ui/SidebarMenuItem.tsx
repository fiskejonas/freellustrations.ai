import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@/config/sidebarMenu";
import { Badge } from "@/components/ui/shadcn/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";

interface SidebarMenuItemProps {
  item: MenuItem;
  isAdmin: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, isAdmin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === item.path;

  if (item.adminOnly && !isAdmin) return null;

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div
          onClick={() => navigate(item.path)}
          className={
            isActive
              ? "flex items-center gap-3 rounded-lg shadow-xl text-white font-bold px-3 py-3 hover:text-white bg-customPurple hover:-translate-y-0.5 transition-transform ease-in-out duration-200 cursor-pointer"
              : "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground hover:text-black hover:-translate-y-0.5 transition-transform ease-in-out duration-200 cursor-pointer"
          }
        >
          <div className="flex items-center gap-3 w-full">{item.icon}</div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        className="flex w-fit gap-2 h-fit bg-foreground text-background px-2 py-1 border-none outline-none"
      >
        <p>{item.name}</p>
        {item.adminOnly && isAdmin && (
          <Badge variant="secondary" className="ml-auto">
            Admin
          </Badge>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default SidebarMenuItem;
