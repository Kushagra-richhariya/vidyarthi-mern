import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Hamburger menu for mobile */}
      <button
        className="absolute top-4 left-4 z-30 md:hidden bg-richblack-800 p-2 rounded-full border border-richblack-700"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <AiOutlineMenu size={24} />
      </button>
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Sidebar drawer for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Sidebar drawer */}
          <div className="relative w-64 max-w-full h-full bg-richblack-900 border-r border-richblack-700 shadow-lg animate-slideInLeft">
            <button
              className="absolute top-4 right-4 z-50 bg-richblack-800 p-1 rounded-full border border-richblack-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <AiOutlineClose size={20} />
            </button>
            <Sidebar />
          </div>
        </div>
      )}
      {/* Main content */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard