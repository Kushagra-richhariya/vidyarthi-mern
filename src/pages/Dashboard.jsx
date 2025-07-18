import { useSelector, useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { VscSignOut, VscSettingsGear } from "react-icons/vsc"
import * as Icons from "react-icons/vsc"
import Sidebar from "../components/core/Dashboard/Sidebar"
import Vidyarthi from "../assets/Logo/Vidyarthi.png"
import { sidebarLinks } from "../data/dashboard-links"
import { logout } from "../services/operations/authAPI"

function Dashboard() {
  const { user, loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  // Filter sidebar links based on user role
  const filteredLinks = sidebarLinks.filter(
    (link) => !link.type || link.type === user?.accountType
  )

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Main content area with header */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
        {/* Header with logo and hamburger menu on mobile */}
        <div className="w-11/12 max-w-[1000px] mx-auto flex items-center justify-between py-4 md:py-10">
          <div className="flex items-center gap-2">
            <img src={Vidyarthi} alt="Logo" className="h-8 md:h-10" />
          </div>
          {/* Hamburger menu for mobile, right side */}
          <button
            className="md:hidden bg-richblack-800 p-2 rounded-full border border-richblack-700 ml-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
        <div className="mx-auto w-11/12 max-w-[1000px]">
          <Outlet />
        </div>
      </div>
      {/* Sidebar drawer for mobile (slides in from left) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex justify-start">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Sidebar drawer with correct options and styling */}
          <div className="relative w-64 max-w-full h-full bg-richblack-800 border-r border-richblack-200 shadow-lg animate-slideInLeft flex flex-col py-8 px-4">
            <button
              className="absolute top-4 right-4 z-50 bg-richblack-100 p-1 rounded-full border border-richblack-200"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <AiOutlineClose size={20} />
            </button>
            {/* Sidebar options for mobile, role-based, with icons */}
            <nav className="flex flex-col gap-2 mt-8">
              {filteredLinks.map((link) => {
                const Icon = Icons[link.icon] || Icons["VscDashboard"]
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      navigate(link.path)
                      setSidebarOpen(false)
                    }}
                    className="flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-gray-100 text-richblack-700 font-medium transition-all"
                  >
                    <Icon className="text-lg" />
                    <span>{link.name}</span>
                  </button>
                )
              })}
              {/* Settings */}
              <button
                onClick={() => {
                  navigate("/dashboard/settings")
                  setSidebarOpen(false)
                }}
                className="flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-gray-100 text-richblack-700 font-medium transition-all mt-2"
              >
                <VscSettingsGear className="text-lg" />
                <span>Settings</span>
              </button>
              {/* Logout */}
              <button
                onClick={() => {
                  setSidebarOpen(false)
                  dispatch(logout(navigate))
                }}
                className="flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-gray-100 text-pink-500 font-medium transition-all mt-2"
              >
                <VscSignOut className="text-lg" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard