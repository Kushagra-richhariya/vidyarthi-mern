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
      {/* Main content area with header */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
        {/* Header with hamburger menu on mobile */}
        <div className="w-11/12 max-w-[1000px] mx-auto flex items-center justify-between py-4 md:py-10">
          {/* Logo (optional, if you want to show it here) */}
          {/* <img src={Vidyarthi} alt="Logo" className="h-8 md:h-10" /> */}
          <div></div> {/* Empty div to push hamburger to right */}
          <button
            className="md:hidden bg-richblack-800 p-2 rounded-full border border-richblack-700 ml-auto"
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
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Sidebar drawer for mobile (slides in from right) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Sidebar drawer */}
          <div className="relative w-64 max-w-full h-full bg-richblack-900 border-l border-richblack-700 shadow-lg animate-slideInRight">
            <button
              className="absolute top-4 left-4 z-50 bg-richblack-800 p-1 rounded-full border border-richblack-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <AiOutlineClose size={20} />
            </button>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard