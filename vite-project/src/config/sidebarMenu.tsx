import {
  Home,
  Search,
  Upload,
  Heart,
  History,
  Users,
} from "lucide-react"

export interface MenuItem {
  name: string
  path: string
  icon: React.ReactNode
  adminOnly?: boolean
}

export const sidebarMenu: MenuItem[] = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Browse", path: "/browse", icon: <Search className="h-4 w-4" /> },
  { name: "Upload Image", path: "/upload", icon: <Upload className="h-4 w-4" /> },
  { name: "Liked Creations", path: "/liked", icon: <Heart className="h-4 w-4" /> },
  { name: "Upload History", path: "/history", icon: <History className="h-4 w-4" /> },
  { 
    name: "Users List", 
    path: "/users", 
    icon: <Users className="h-4 w-4" />, 
    adminOnly: true 
  },
]
