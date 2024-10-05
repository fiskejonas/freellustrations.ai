import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem } from '@/config/sidebarMenu'
import { Badge } from "@/components/ui/badge"

interface SidebarMenuItemProps {
  item: MenuItem
  isAdmin: boolean
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, isAdmin }) => {
  if (item.adminOnly && !isAdmin) return null

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-3 rounded-lg shadow-xl text-white font-bold px-3 py-3 hover:text-white bg-customPurple hover:-translate-y-0.5 transition-transform ease-in-out duration-200"
          : "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground hover:text-black hover:-translate-y-0.5 transition-transform ease-in-out duration-200"
      }
    >
      {item.icon}
      <span>{item.name}</span>
      {item.adminOnly && isAdmin && (
        <Badge variant="secondary" className="ml-auto">
          Admin
        </Badge>
      )}
    </NavLink>
  )
}

export default SidebarMenuItem
