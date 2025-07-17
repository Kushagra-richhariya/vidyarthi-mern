import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Sidebar from "../components/core/Dashboard/Sidebar"
import Vidyarthi from "../assets/Logo/Vidyarthi.png"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

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
            {/* Hamburger menu for mobile, left of content, not overlapping logo */}
            <button
              className="md:hidden bg-richblack-800 p-2 rounded-full border border-richblack-700 ml-2"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <AiOutlineMenu size={24} />
            </button>
          </div>
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
          <div className="relative w-64 max-w-full h-full bg-richblack-900 border-r border-richblack-700 shadow-lg animate-slideInLeft flex flex-col py-8 px-4">
            <button
              className="absolute top-4 right-4 z-50 bg-richblack-800 p-1 rounded-full border border-richblack-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <AiOutlineClose size={20} />
            </button>
            {/* Sidebar options for mobile */}
            <nav className="flex flex-col gap-4 mt-8">
              <button onClick={() => {navigate('/dashboard/my-profile'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-richblack-5 font-medium">My Profile</button>
              <button onClick={() => {navigate('/dashboard'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-richblack-5 font-medium">Dashboard</button>
              <button onClick={() => {navigate('/dashboard/my-courses'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-richblack-5 font-medium">My Courses</button>
              <button onClick={() => {navigate('/dashboard/add-course'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-richblack-5 font-medium">Add Course</button>
              <button onClick={() => {navigate('/dashboard/settings'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-richblack-5 font-medium">Settings</button>
              <button onClick={() => {navigate('/dashboard/settings'); setSidebarOpen(false)}} className="text-left px-4 py-2 rounded hover:bg-richblack-800 text-pink-400 font-medium mt-4">Logout</button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard