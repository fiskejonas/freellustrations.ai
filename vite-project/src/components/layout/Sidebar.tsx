import React from 'react'
import SidebarMenuItem from '@/components/ui/SidebarMenuItem'
import { sidebarMenu } from '@/config/sidebarMenu'

interface DashboardSidebarProps {
  isAdmin: boolean
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isAdmin }) => {
  return (
    <div className="flex h-screen w-[280px] flex-col p-4 bg-transparent">
      <div className="flex flex-col w-full border h-full bg-white rounded-lg shadow-lg dark:bg-gray-800"> {/* Add dark mode background */}
        <div className="flex items-center pb-2 flex-col px-6 lg:h-[60px]">
          <div className="text-lg h-14 flex items-end pb-2 w-full font-light tracking-tighter">Freellustrations</div>
          <div className="line border-b w-full"></div>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarMenu.map((item) => (
              <SidebarMenuItem key={item.path} item={item} isAdmin={isAdmin} />
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-4 border">
            <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar