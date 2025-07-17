import { useEffect, useRef, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"
import Vidyarthi from "../../assets/Logo/Vidyarthi.png"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const { catalogRefreshTrigger } = useSelector((state) => state.course)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        console.log("Refreshing catalog data...")
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        console.log("Categories data:", res.data.data)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [catalogRefreshTrigger])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex justify-between items-center w-11/12 max-w-maxContent relative">
        {/* Logo */}
        <Link to="/">
          <img src={Vidyarthi} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`flex relative gap-1 items-center cursor-pointer group ${ matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div
                        className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-800 p-4 text-richblack-5 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] shadow-lg"
                      >
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-800"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="py-4 pl-4 bg-transparent rounded-lg text-richblack-5 hover:bg-richblack-900 hover:text-yellow-50 transition"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden gap-x-4 items-center md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="grid overflow-hidden absolute -right-2 -bottom-2 place-items-center w-5 h-5 text-xs font-bold text-center text-yellow-100 rounded-full bg-richblack-600">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        {/* Hamburger menu for mobile */}
        <button className="mr-4 md:hidden" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Open menu">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-14 right-0 z-50 w-64 bg-richblack-900 border border-richblack-700 rounded-lg shadow-lg flex flex-col p-6 gap-4 md:hidden animate-slideIn"
          >
            <ul className="flex flex-col gap-4 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <p>{link.title}</p>
                        <BsChevronDown />
                      </div>
                      <div className="flex flex-col pl-4">
                        {loading ? (
                          <p>Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                className="py-2 text-richblack-5 hover:text-yellow-50 transition"
                                key={i}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))
                        ) : (
                          <p>No Courses Found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path} onClick={() => setMobileMenuOpen(false)}>
                      <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>{link.title}</p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-4">
              {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className="relative" onClick={() => setMobileMenuOpen(false)}>
                  <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                  {totalItems > 0 && (
                    <span className="grid overflow-hidden absolute -right-2 -bottom-2 place-items-center w-5 h-5 text-xs font-bold text-center text-yellow-100 rounded-full bg-richblack-600">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              {token === null && (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 w-full">Log in</button>
                </Link>
              )}
              {token === null && (
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 w-full">Sign up</button>
                </Link>
              )}
              {token !== null && <ProfileDropdown mobile onClose={() => setMobileMenuOpen(false)} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar